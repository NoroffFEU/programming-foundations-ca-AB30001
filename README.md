[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12266781&assignment_repo_type=AssignmentRepo)

# Programming Foundations CA

iPhone Object Documentation
The iphone object is a simple JavaScript object that stores properties of a smartphone. This object has properties that provide basic information about a particular iPhone model, as well as a method to toggle a boolean value representing whether the phone is unlocked.

Object Properties
brand (String)
The manufacturer of the phone, which is "Apple" in this case.

model (String)
Specifies the model of the iPhone, e.g., "iPhone 12".

color (String)
The color of the phone. For instance, it might be "Black".

storageGB (Number)
The storage capacity of the iPhone, measured in gigabytes (GB). It's represented by a numerical value, e.g., 128.

batteryPercentage (Number)
Indicates the current battery percentage of the phone. The value should be between 0 and 100.

unlocked (Boolean)
A boolean value that states whether the phone is unlocked (true) or not (false).

features (Array of Strings)
An array that contains strings, each string describing a different feature of the iPhone. Example features include "Face ID" and "A14 Bionic Chip".

Object Methods
togglePower()
A method that toggles the unlocked property of the iphone object. If unlocked is true, it will be set to false, and vice versa.

Example Usage
Here's a basic example of how to use the iphone object:

// Log the current battery percentage
console.log(iphone.batteryPercentage); // Output: 80

// Check if the phone is unlocked
console.log(iphone.unlocked); // Output: false

// Toggle the unlocked status
iphone.togglePower();

// Check the unlocked status again
console.log(iphone.unlocked); // Output: true

In the example above, we retrieve and log the battery percentage, check whether the phone is unlocked, toggle the unlocked status, and check the unlocked status again to confirm that it has changed.
