// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.8.0;

pragma experimental ABIEncoderV2;

contract SupplyChain {
    
    address owner;
    
    enum state { manufacture, distributor, retailer, consumer }
    
    struct Coordinate {
        uint256 lat;
        uint256 long;
    }
    uint256 [] arr;
    

    struct product {
        string name;
        uint256 id;
        string detail;
        Coordinate location;
        state current_state;
        string manufacture_name;
        string distributor_name;
        string retailer_name;
        string consumer_name;
    }
    
    constructor (){
        
    }
    
    uint256 public product_count = 0;
    
    product[]  public data;
    
    function add_product (string memory  _name, string memory  _detail) public {
        product memory temp;
        temp.name = _name;
        temp.id = product_count;
        product_count++;
        temp.detail = _detail;
        temp.location.lat = 56;
        temp.location.long = 66;
        temp.current_state = state.manufacture;
        temp.manufacture_name = "R L Manufacture";
        
        data.push(temp);
    }
    
    function sell_to_distributor(uint256 _id) public  {
        require(_id < data.length);
        require(data[_id].current_state == state.manufacture);
        data[_id].current_state = state.distributor;
        data[_id].distributor_name = "J K Distributor";
        
        
    }
    
    function sell_to_retailer(uint256 _id) public {
        require(_id < data.length);
        require(data[_id].current_state == state.distributor);
        data[_id].current_state = state.retailer;
        data[_id].retailer_name = "A B Retailer";
    }
    
    function sell_to_consumer(uint256 _id) public {
        require(_id < data.length);
        require(data[_id].current_state == state.retailer);
        data[_id].current_state = state.consumer;
        
        data[_id].consumer_name = "Vishal Jangid";
    }
    

}