const StarNotary = artifacts.require('StarNotary')

contract('StarNotary', accounts => { 
    const name = 'Star power 103!'
    const story = 'I love my wonderful star'
    const dec = 'dec_121.874'
    const mag = 'mag_245.978'
    const cent = 'ra_032.155'
    const tokenId = 1

    let defaultAccount = accounts[0];
    let user1 = accounts[1]
    let user2 = accounts[2]
    // let randomMaliciousUser = accounts[3]
    let starPrice = web3.toWei(.01, "ether")
    
    beforeEach(async function() { 
        this.contract = await StarNotary.new({from: defaultAccount})
    })
    
    // createStar()
    describe('createStar()', () => { 
        it('create a new star', async function () {
            await this.contract.createStar(name, story, dec, mag, cent, {from: defaultAccount})
        })
    })

    // checkIfStarExist()
    describe('checkIfStarExist()', () => { 
        it('shows false when trying to create the stars with the unduplicate coordinated', async function () {
            assert.equal(await this.contract.checkIfStarExist(dec, mag, cent), false)
        })

        it('shows true when trying to create the stars with the duplicate coordinated', async function () {
            await this.contract.createStar(name, story, dec, mag, cent, {from: defaultAccount})
            assert.equal(await this.contract.checkIfStarExist(dec, mag, cent), true)
        })
    })

    // tokenIdToStarInfo()
    describe('tokenIdToStarInfo()', () => {
        it('Gets StarInfo by tokenId', async function () {       
            await this.contract.createStar(name, story, dec, mag, cent, {from: defaultAccount})
            assert.deepEqual(await this.contract.tokenIdToStarInfo(tokenId, {from: defaultAccount}), [name, story, dec, mag, cent]);
        })    
    })

    // ownerOf()
    describe('ownerOf()', () => {
        it('Gets the owner of the specified token ID', async function () {
            await this.contract.createStar(name, story, dec, mag, cent, {from: defaultAccount})
            const owner = await this.contract.ownerOf(tokenId, {from: defaultAccount})
            assert.equal(owner, defaultAccount)
        })
    })

    // putStarUpForSale() starsForSale()
    describe('putStarUpForSale() starsForSale()', () => {
        it('Maps tokenId and starPrice into starsForSale\n\
        & Get that info', async function () {
            await this.contract.createStar(name, story, dec, mag, cent, {from: defaultAccount});
            await this.contract.putStarUpForSale(tokenId, starPrice, {from: defaultAccount});
            assert.equal(await this.contract.starsForSale(tokenId), starPrice);
        })
    })    
   
    // buyStar()
    describe('buyStar()', () => { 
        it('user2 buys the star from user1', async function() { 
            await this.contract.createStar(name, story, dec, mag, cent, {from: user1});
            await this.contract.putStarUpForSale(tokenId, starPrice, {from: user1});
            await this.contract.buyStar(tokenId, {from: user2, value: starPrice, gasPrice: 0})
            assert.equal(await this.contract.ownerOf(tokenId), user2)
        })
    })    

    // checkIfStarExist()
    describe('checkIfStarExist()', () => { 
        it('Should return true when the given coordinates are occupied', async function() { 
            await this.contract.createStar(name, story, dec, mag, cent, {from: defaultAccount});
            assert.equal(await this.contract.checkIfStarExist(dec, mag, cent), true);
        })

        it('Should return false when the given coordinates are not occupied', async function() { 
            await this.contract.createStar(name, story, dec, mag, cent, {from: defaultAccount});
            assert.notEqual(await this.contract.checkIfStarExist(0, 0, 0), true);
        })
    })

    // mint()
    describe('mint()', () => { 
        it('Mint a new token', async function() { 
            await this.contract.mint(tokenId, {from:defaultAccount});
            assert.equal(await this.contract.ownerOf(tokenId), defaultAccount)
        })

        // same like upper test
        // it('Mint a new token', async function() { 
        //     let result = await this.contract.mint(tokenId, {from:defaultAccount});
        //     const toAddress =result.logs[0].args.to;
        //     assert.equal(defaultAccount, toAddress);
        // })

    })

    // approve() getApproved()
    describe('approve() getApproved()', () => { 
        it('Approves another address to transfer the given token ID\n\
        & Gets the approved address for a token ID, or zero if no address set', async function() { 
            await this.contract.createStar(name, story, dec, mag, cent, {from: user1});
            await this.contract.approve(user2, tokenId, {from:user1});
            assert.equal(await this.contract.getApproved(tokenId), user2);
        })
    })

    // safeTransferFrom()
    // at here, It doesn't work when I use user1 instead of defaultAccount.
    describe('safeTransferFrom()', () => { 
        it('Safely transfers the ownership of a given token ID to another address', async function() { 
            await this.contract.createStar(name, story, dec, mag, cent, {from: defaultAccount});            
            await this.contract.safeTransferFrom(defaultAccount, user2, tokenId);
            assert.equal(await this.contract.ownerOf(tokenId), user2)
        })
    })

    // // SetApprovalForAll() isApprovedForAll()
    describe('SetApprovalForAll() isApprovedForAll()', () => { 
        beforeEach(async function() { 
            await this.contract.createStar(name, story, dec, mag, cent, {from: defaultAccount});
        })

        it('Sets the approval of a given operator\n\
        & Tells whether an operator is approved by a given owner', async function() { 
            await this.contract.setApprovalForAll(user2, true);
            assert.equal(await this.contract.isApprovedForAll(defaultAccount, user2), true);
        })

        it('Unsets the approval of a given operator\n\
        & Tells whether an operator is approved by a given owner', async function() { 
            await this.contract.setApprovalForAll(user2, false);
            assert.notEqual(await this.contract.isApprovedForAll(defaultAccount, user2), true);
        })
    })
})//contract