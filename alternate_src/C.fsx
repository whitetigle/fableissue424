#r "../../node_modules/fable-core/Fable.Core.dll"
#load "../lib/B.fsx"

open System
open System.Collections.Generic

let testFromB e =
  B.B.printSomething(e)

testFromB "Hello World!"
