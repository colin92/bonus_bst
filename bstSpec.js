describe("Binary Search Tree", function() {
  var bst;

  beforeEach(function() {
    bst = new Bst();
  });

  
  it("should have an initial size of 0", function() {
    expect(bst.size).toEqual(0);
  });

  it("should have methods named insert, remove, and search", function() {
    expect(bst.insert instanceof Function).toBeTruthy(); 
    expect(bst.remove instanceof Function).toBeTruthy(); 
    expect(bst.search instanceof Function).toBeTruthy(); 
  });

  it("should insert correctly", function() {
    bst.insert('yay');
    expect(bst.head.data).toEqual('yay');
    bst.insert('yess');
    expect(bst.head.right.data).toEqual('yess');
    bst.insert('no');
    expect(bst.head.left.data).toEqual('no');
    bst.insert('i');
    expect(bst.head.left.left.data).toEqual('i');
  });

  it("should search correctly", function() {
    expect(bst.search('me')).toEqual(null);
    bst.insert('i');
    bst.insert('am');
    bst.insert('a');
    bst.insert('lasagna');
    bst.insert('hog');
    expect(bst.search('pirate')).toEqual('pirate');
    expect(bst.search('llama')).toEqual(null);
  });

  it("should remove an element correctly", function() {
    bst.insert('i');
    bst.insert('am');
    bst.insert('a');
    bst.insert('lasagna');
    bst.insert('hog');
    expect(bst.remove('hog')).toEqual('hog');
    expect(bst.search('hog')).toEqual(null);
    expect(bst.remove('llama')).toThow('There\'s no such element!');
  });

  xit("should remove a higher element correctly", function() {
    bst.insert('i');
    bst.insert('live');
    bst.insert('on');
    bst.insert('a');
    bst.insert('pirate');
    bst.insert('ship');
    bst.remove('live');
    expect(bst.search('live')).toEqual(null);
    expect(bst.head.right.data).toEqual('ship');
    expect(bst.head.right.right.data).toEqual('pirate');
  });

});
