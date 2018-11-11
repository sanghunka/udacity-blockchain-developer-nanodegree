pragma solidity ^0.4.23;

import 'openzeppelin-solidity/contracts/token/ERC721/ERC721.sol';

contract StarNotary is ERC721 { 

    // Part 1 Requirement 2: Add metadata to the star token
    struct Coordinates {
        string dec;
        string mag;
        string cent;
    }
    
    struct Star { 
        string name; 
        string story;
        //Star coordinates
        Coordinates coordinates;
        
    }

    uint256 tokenCount = 0;

    mapping(uint256 => Star) public tokenIdToStarInfo; 
    mapping(uint256 => uint256) public starsForSale;

    Star[] internal stars;
    uint256[] public StarsIndicesForSale;

    // createStar()
    function createStar(string _name, string story, string dec, string mag, string cent) public { 
        //check all required input
        bytes32 keccak256ResultOfEmpty = keccak256("");

        require(keccak256(abi.encodePacked(dec)) != keccak256ResultOfEmpty, "dec can't be empty value");
        require(keccak256(abi.encodePacked(mag)) != keccak256ResultOfEmpty, "mag can't be empty value");
        require(keccak256(abi.encodePacked(cent)) != keccak256ResultOfEmpty, "cent can't be empty value");

        //Smart contract prevents stars with the same coordinates from being added
        require(!checkIfStarExist(dec, mag, cent), "The star exists at given coordinates");

        Coordinates memory coordinates = Coordinates(dec, mag, cent);
        Star memory newStar = Star(_name, story, coordinates);
        stars.push(newStar);

        tokenCount++;
        uint256 _tokenId = tokenCount;
        tokenIdToStarInfo[_tokenId] = newStar;

        mint(_tokenId);
    }

    // putStarUpForSale()
    function putStarUpForSale(uint256 _tokenId, uint256 _price) public { 
        require(this.ownerOf(_tokenId) == msg.sender);

        starsForSale[_tokenId] = _price;

        StarsIndicesForSale.push(_tokenId);
    }

    // buyStar()
    function buyStar(uint256 _tokenId) public payable { 
        require(starsForSale[_tokenId] > 0);
        
        uint256 starCost = starsForSale[_tokenId];
        address starOwner = this.ownerOf(_tokenId);
        require(msg.value >= starCost);

        _removeTokenFrom(starOwner, _tokenId);
        _addTokenTo(msg.sender, _tokenId);
        
        starOwner.transfer(starCost);

        if(msg.value > starCost) { 
            msg.sender.transfer(msg.value - starCost);
        }

        //remove star from starsForSale & StarsIndicesForSale ????
    }

    // checkIfStarExist()
    function checkIfStarExist(string _dec, string _mag, string _cent) public view returns (bool){
        for (uint i = 0; i < stars.length; i++) {
            Star memory eachStar = stars[i];
            
            string memory eachDec = eachStar.coordinates.dec;
            string memory eachMag = eachStar.coordinates.mag;
            string memory eachCent = eachStar.coordinates.cent;

            if (keccak256(abi.encodePacked(eachDec, eachMag, eachCent)) == keccak256(abi.encodePacked(_dec, _mag, _cent))) {
                return true;
            }
        }
        return false;
    }

    // mint()
    function mint(uint256 tokenId) public {
        super._mint(msg.sender, tokenId); //Implemented in Openzeppelin ERC721.sol
    }

    // starsForSale()
    function starsForSale() public view returns(uint256[]) {
        return StarsIndicesForSale;
    }

    // tokenIdToStarInfo()
    function tokenIdToStarInfo(uint256 tokenId) public view returns(string, string, string, string, string) {
        return (
            tokenIdToStarInfo[tokenId].name,
            tokenIdToStarInfo[tokenId].story,
            tokenIdToStarInfo[tokenId].coordinates.dec,
            tokenIdToStarInfo[tokenId].coordinates.mag,
            tokenIdToStarInfo[tokenId].coordinates.cent
        );
    }
    // approve()
    //Implemented in Openzeppelin ERC721.sol
    // safeTransferFrom()
    //Implemented in Openzeppelin ERC721.sol
    // setApprovalForAll()
    //Implemented in Openzeppelin ERC721.sol
    // getApproved()
    //Implemented in Openzeppelin ERC721.sol
    // isApprovedForAll()
    //Implemented in Openzeppelin ERC721.sol
    // ownerOf()
    // Implemented in Openzeppelin ERC721.sol
}