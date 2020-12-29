with import <nixpkgs> {};

stdenv.mkDerivation {
  name = "rusnak.io-dev";
  buildInputs = [
    (jekyll.override { withOptionalDependencies = true; })
  ];
}
