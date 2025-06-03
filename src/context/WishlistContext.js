import React, { createContext, useState, useEffect } from 'react';

export const WishlistContext = createContext(); //createContext la namma oru global data share panna context create panrom.
                                                //WishlistContext nu oru global container create panrom, ithula data store aagum.  

export const WishlistProvider = ({ children }) => {
   const [wishlist, setWishlist] = useState(() => {
    // Step 1: Load from localStorage (only runs once at the beginning)
    const storedWishlist = localStorage.getItem('wishlist');
    return storedWishlist ? JSON.parse(storedWishlist) : [];
  });


useEffect(() => {
    // Step 2: Save to localStorage whenever wishlist changes
    // when page reload one time render the wishlist funcation and then when change
    //  the wishlist state that time render to the useeffect also

    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    console.log("useeffect trigger")
  }, [wishlist]);


  const toggleWishlist = (shirt) => {
    setWishlist((prev) => {
      const exists = prev.find((item) => item.id === shirt.id); //prev la irukkura ella item-um item nu loop panrom. Athu shirt.id kooda match aagudhaa nu check panrom.
      if (exists) {
        return prev.filter((item) => item.id !== shirt.id); // remove
      } else {
        return [...prev, shirt]; // add
      }
    });
  };

  return (
   
    <WishlistContext.Provider value={{ wishlist, toggleWishlist } }>
      {children}
    </WishlistContext.Provider>

  );
};
