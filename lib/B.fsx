#r "../../node_modules/fable-core/Fable.Core.dll"

open Fable.Core
open Fable.Import.Browser
open Fable.Import.JS

module B =

  let printSomething s =
    console.log("in")
    console.log(s)
