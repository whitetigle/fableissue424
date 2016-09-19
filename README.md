# fableissue424
test case for fable issue #424

How to test:
compile with command line to start watching.
make a change to lib/B.fsx and see if a new compilation happens.

Working case:
`fable --projFile ./A.fsx --outDir out -s -w`

non working case:
`fable --projFile ./alternate_src/C.fsx --outDir ./out -s -w`
