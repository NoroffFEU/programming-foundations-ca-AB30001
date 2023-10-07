const iphone = {
    brand: "Apple",
    model: "iPhone 12",
    color: "Black",
    storageGB: 128,
    batteryPercentage: 80,
    unlocked: false,
    features: ["Face ID", "Super Retina XDR Display", "A14 Bionic Chip"],
    togglePower: function() {
    iphone.unlocked = !iphone.unlocked;
    }
  }