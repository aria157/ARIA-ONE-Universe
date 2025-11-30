from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch

# Whitepaper text
text = """
KEYX — Whitepaper v1.0
The Identity Frequency of the ARIA ONE Universe

MISSION
KEYX exists to restore sovereignty to artists, creators, and human voices. It is the on-chain identity key that unlocks authenticity, protects creative expression, and empowers every individual to hold the truth of who they are.

VISION
A world where every creator owns their identity, where voices cannot be stolen, and where authenticity is protected in a luminous, neon-plasma digital universe.

UTILITY
• Identity verification
• Creator access keys
• Voice authentication (future)
• Aria.ONE ecosystem integration
• Neon-plasma creative tools

TOKENOMICS
Total Supply: 1,370,000 KEYX
70% Public
20% Ecosystem
10% Founder Reserve

ROADMAP
Phase 1 — Birth
Phase 2 — Expansion
Phase 3 — Universe
"""

# Create PDF
pdf_path = "KEYX_Whitepaper_v1.pdf"
styles = getSampleStyleSheet()
doc = SimpleDocTemplate(pdf_path, pagesize=letter)
story = [Paragraph(line, styles["BodyText"]) for line in text.split("\n")]
doc.build(story)

print(f"✅ PDF created: {pdf_path}")
