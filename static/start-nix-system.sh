#!/usr/bin/env nix-shell
#! nix-shell -i bash -p bash git

echo "Just a reminder, this script is meant to be run on a fresh NixOS install. If you do it elsewhere, you will probably fuck your system."
read -n 1 -p "If you're fine with this, press 'y': " checkinput

echo ""

if [[ "$checkinput" != "y" ]] 
then

  echo "Aborting."
fi

mkdir ~/.generated-configs
nixos-generate-config --dir ~/.generated-configs

sudo rm -r /etc/nixos
sudo git clone https://github.com/firesquid6/system-config /etc/nixos
sudo chown -R $USER /etc/nixos
sudo chown -R firesquid /etc/nixos
