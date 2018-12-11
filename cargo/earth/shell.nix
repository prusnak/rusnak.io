with import <nixpkgs> {};

let
  myPython = python36.withPackages(p: [p.geopy]);
in
  stdenv.mkDerivation {
    name = "myearth-dev";
    buildInputs = [ myPython ];
  }
