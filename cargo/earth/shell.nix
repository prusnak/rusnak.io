with import <nixpkgs> {};

let
  myPython = python3.withPackages(p: [p.geopy]);
in
  stdenv.mkDerivation {
    name = "myearth-dev";
    buildInputs = [ myPython ];
  }
