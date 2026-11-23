# Force PS5 full-title RELRO to begin at a 16 KiB boundary.
# PS5 rtld requires absolute PT_LOAD offsets and VAs to be page-aligned.
# The native converter derives a separate LOAD from .data.rel.ro.
.section .data.rel.ro,"aw",@progbits
.p2align 14
.global ps5_relro_page_alignment_anchor
ps5_relro_page_alignment_anchor:
.quad 0
