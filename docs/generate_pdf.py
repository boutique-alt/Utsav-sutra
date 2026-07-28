"""Generate Utsav Sutra Implementation Plan PDF from markdown."""
from pathlib import Path
import re
from fpdf import FPDF

DOCS = Path(__file__).parent
MD_FILE = DOCS / "Utsav-Sutra-Implementation-Plan.md"
PDF_FILE = DOCS / "Utsav-Sutra-Implementation-Plan.pdf"


class PlanPDF(FPDF):
    def header(self):
        if self.page_no() > 1:
            self.set_font("Helvetica", "I", 8)
            self.set_text_color(120, 120, 120)
            self.cell(0, 8, "Utsav Sutra Website - Detailed Implementation Plan v1.0", align="C")
            self.ln(4)

    def footer(self):
        self.set_y(-12)
        self.set_font("Helvetica", "I", 8)
        self.set_text_color(120, 120, 120)
        self.cell(0, 8, f"Page {self.page_no()}", align="C")


def sanitize(text: str) -> str:
    replacements = {
        "\u2014": "-",
        "\u2013": "-",
        "\u2018": "'",
        "\u2019": "'",
        "\u201c": '"',
        "\u201d": '"',
        "\u2192": "->",
        "\u2265": ">=",
        "\u2264": "<=",
        "\u2713": "[x]",
        "\u2717": "[ ]",
        "\u20b9": "Rs.",
        "\u00d7": "x",
    }
    for old, new in replacements.items():
        text = text.replace(old, new)
    return text.encode("latin-1", errors="replace").decode("latin-1")


def write_wrapped(pdf: PlanPDF, text: str, size: int = 10, style: str = "", lh: float = 5.5):
    pdf.set_font("Helvetica", style, size)
    pdf.set_text_color(45, 45, 45)
    pdf.multi_cell(pdf.epw, lh, sanitize(text))


def render_markdown(pdf: PlanPDF, content: str):
    lines = content.split("\n")
    in_code = False
    code_buf: list[str] = []
    i = 0

    while i < len(lines):
        line = lines[i]

        if line.strip().startswith("```"):
            if in_code:
                pdf.set_font("Courier", "", 8)
                pdf.set_fill_color(245, 245, 245)
                block = sanitize("\n".join(code_buf))
                pdf.multi_cell(pdf.epw, 4.2, block, fill=True)
                pdf.ln(2)
                code_buf = []
                in_code = False
            else:
                in_code = True
            i += 1
            continue

        if in_code:
            code_buf.append(line)
            i += 1
            continue

        if line.startswith("# "):
            pdf.ln(4)
            pdf.set_font("Helvetica", "B", 18)
            pdf.set_text_color(123, 30, 58)
            pdf.multi_cell(pdf.epw, 8, sanitize(line[2:].strip()))
            pdf.ln(2)
        elif line.startswith("## "):
            pdf.ln(3)
            pdf.set_font("Helvetica", "B", 14)
            pdf.set_text_color(123, 30, 58)
            pdf.multi_cell(pdf.epw, 7, sanitize(line[3:].strip()))
            pdf.ln(1)
        elif line.startswith("### "):
            pdf.ln(2)
            pdf.set_font("Helvetica", "B", 11)
            pdf.set_text_color(80, 80, 80)
            pdf.multi_cell(pdf.epw, 6, sanitize(line[4:].strip()))
            pdf.ln(1)
        elif line.startswith("#### "):
            pdf.ln(1)
            pdf.set_font("Helvetica", "B", 10)
            pdf.set_text_color(80, 80, 80)
            pdf.multi_cell(pdf.epw, 5.5, sanitize(line[5:].strip()))
        elif line.strip() == "---":
            pdf.ln(2)
            pdf.set_draw_color(201, 168, 76)
            pdf.set_line_width(0.3)
            y = pdf.get_y()
            pdf.line(15, y, pdf.w - 15, y)
            pdf.ln(3)
        elif line.strip().startswith("|") and "|" in line.strip()[1:]:
            cells = [c.strip() for c in line.strip().strip("|").split("|")]
            if all(set(c) <= {"-", ":", " "} for c in cells):
                i += 1
                continue
            row = "  |  ".join(cells)
            write_wrapped(pdf, row, size=9)
        elif line.strip().startswith("- [ ]") or line.strip().startswith("- [x]"):
            write_wrapped(pdf, "  " + line.strip()[2:].strip(), size=9)
        elif line.strip().startswith("- ") or line.strip().startswith("* "):
            write_wrapped(pdf, "  * " + line.strip()[2:], size=9)
        elif re.match(r"^\d+\.\s", line.strip()):
            write_wrapped(pdf, "  " + line.strip(), size=9)
        elif line.strip().startswith(">"):
            pdf.set_font("Helvetica", "I", 9)
            pdf.set_text_color(100, 100, 100)
            pdf.multi_cell(pdf.epw, 5, sanitize(line.strip()[1:].strip()))
        elif line.strip() == "":
            pdf.ln(2)
        else:
            write_wrapped(pdf, line.strip(), size=9)

        if pdf.get_y() > 270:
            pdf.add_page()

        i += 1


def main():
    content = MD_FILE.read_text(encoding="utf-8")
    pdf = PlanPDF(orientation="P", unit="mm", format="A4")
    pdf.set_margins(15, 15, 15)
    pdf.set_auto_page_break(auto=True, margin=15)
    pdf.add_page()

    pdf.set_font("Helvetica", "B", 22)
    pdf.set_text_color(123, 30, 58)
    pdf.multi_cell(pdf.epw, 10, "Utsav Sutra Website")
    pdf.set_font("Helvetica", "", 14)
    pdf.set_text_color(201, 168, 76)
    pdf.multi_cell(pdf.epw, 8, "Detailed Implementation Plan")
    pdf.set_font("Helvetica", "", 10)
    pdf.set_text_color(100, 100, 100)
    pdf.multi_cell(pdf.epw, 6, "Version 1.0  |  July 27, 2026  |  We Plan. You Celebrate.")
    pdf.ln(4)

    render_markdown(pdf, content)
    pdf.output(str(PDF_FILE))
    print(f"PDF created: {PDF_FILE} ({PDF_FILE.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
