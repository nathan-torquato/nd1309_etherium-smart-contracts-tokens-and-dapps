// Importing the StartNotary Smart Contract ABI (JSON representation of the Smart Contract)
const StarNotary = artifacts.require("StarNotary");

// var accounts; // List of development accounts provided by Truffle
// var owner; // Global variable use it in the tests cases

// This called the StartNotary Smart contract and initialize it
contract('StarNotary', (accs) => {
  const accounts = accs; // Assigning test accounts
  const owner = accounts[0]; // Assigning the owner test account
  
  // Example test case, it will test if the contract is able to return the starName property 
  // initialized in the contract constructor
  it('has correct name', async () => {
    const instance = await StarNotary.deployed(); // Making sure the Smart Contract is deployed and getting the instance.
    let starName = await instance.starName.call(); // Calling the starName property
    assert.equal(starName, "Cool Star"); // Assert if the starName property was initialized correctly
  });

  it('can claim a star', async () => {
    const instance = await StarNotary.deployed();
    await instance.claimStar({ from: owner });
    const starOwner = await instance.starOwner.call();
    assert.equal(starOwner, owner);
  })

  it('can transfer a star', async () => {
    const instance = await StarNotary.deployed();
    await instance.claimStar({ from: owner });
    const starOwner = await instance.starOwner.call();
    assert.equal(starOwner, owner);
    const secondOwner = accounts[1];
    await instance.claimStar({ from: secondOwner });
    const newStarOwner = await instance.starOwner.call();
    assert.equal(newStarOwner, secondOwner);
  })
  
  it('can change the star name', async () => {
    const instance = await StarNotary.deployed();
    await instance.claimStar({ from: owner });
    await instance.changeStarName("New Star", { from: owner });
    const newStarName = await instance.starName.call();
    assert.equal(newStarName, "New Star");
  })
});

