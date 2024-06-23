 // constructor function for my storeItem
 function StoreItem(
    id,
    name,
    price,
    quantityOnHand,
    maxPerCustomer,
    category,
    costOfShipping,
    reviews,
    description,
    image
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantityOnHand = quantityOnHand;
    this.maxPerCustomer = maxPerCustomer;
    this.category = category;
    this.costOfShipping = costOfShipping;
    this.reviews = reviews;
    this.description = description;
    this.image = image;
  }

  // constructor function for my cartItem
  function CartItem(id, price, quantity, shipping) {
    this.id = id;
    this.price = price;
    this.quantity = quantity;
    this.shipping = shipping;
  }

  // constructor function for ReviewItem
  function ReviewItem(review, rating) {
    this.review = review;
    this.rating = rating;
  }

  // empty array for storeItems
  let storeItems = [];

  // empty array for cartItems
  let cartItems = [];

  let cartItem1 = new CartItem("1", 400, 10, 3);
  // let cartItem2 = new CartItem("2", 500, 12, 6);

  let item1 = new StoreItem(
    "1",
    "Amala",
    14,
    120,
    10,
    "Ready to eat",
    5,
    [],
    "Àmàlà is a staple swallow food originating from Nigeria popularized by the Yoruba ethnic group of Southwestern Nigeria & It is made of yam, cassava flour, or unripe plantain flour.",
    "https://i.pinimg.com/474x/d5/46/35/d546354d984eac69205889015b61a10f.jpg"
  );
  let item2 = new StoreItem(
    "2",
    "Beans",
    14,
    400,
    20,
    "Raw",
    5,
    [],
    "African Honey beans are beans that are rich in nutrients, including vitamin A, folate, manganese, and fiber. They are legumes grown around the world for its medium-sized, edible bean. It is a subspecies of the cowpea, an Old World plant domesticated in Africa, and is sometimes simply called a cowpea.",
    "https://i.pinimg.com/474x/95/1c/fb/951cfbf682d0ed1d61c7488ee3e5e1a2.jpg"
  );
  let item3 = new StoreItem(
    "3",
    "Beef stew",
    14,
    200,
    10,
    "Ready to eat",
    5,
    [],
    "This rich and flavorful Nigerian Beef Stew is a comforting and satisfying dish that is perfect for a cozy evening in. Slow-cooked with tender beef, blended tomatoes, pepper and spices, it's a perfect way to warm up on a chilly day.",
    "https://i.pinimg.com/474x/d7/e3/2f/d7e32fc733c263134aa36057a6b8ff7e.jpg"
  );
  let item4 = new StoreItem(
    "4",
    " Peppered Chicken",
    30,
    200,
    10,
    "Ready to eat",
    5,
    [],
    "Peppered Chicken are basically fried or grilled chicken fried in very rich tomato stew. Peppered Chicken are favourites at Nigerian parties and are absolutely delicious",
    "https://i.pinimg.com/474x/b3/0f/79/b30f796bc7c3293d55be315716cfff9e.jpg"
  );
  let item5 = new StoreItem(
    "5",
    "Eba",
    30,
    200,
    10,
    "Ready to eat",
    5,
    [],
    "The term èbà originates from Yoruba. It is a cooked starchy vegetable food made from dried grated cassava (manioc) flour commonly known as garri all across West Africa. It is often eaten with rich soups and stews, with beef, stockfish or mutton.",
    "https://i.pinimg.com/474x/dd/82/a0/dd82a0b59099ca2109ead70fc2e14efa.jpg"
  );
  let item6 = new StoreItem(
    "6",
    "Eggs",
    30,
    400,
    20,
    "Raw",
    5,
    [],
    "Eggs are a food product produced from poultry that is used as both an ingredient and a main dish for baked foods",
    "https://i.pinimg.com/474x/2c/5f/25/2c5f2569ae89a6b116c6f6efbac27411.jpg"
  );
  let item7 = new StoreItem(
    "7",
    "Garri",
    30,
    400,
    20,
    "Raw",
    5,
    [],
    "Garri is dry, crispy, creamy-white and granular. It is made from cassava roots that have been crushed into a mash, fermented and sieved into small pieces (known as grits), it is also a popular food in West Africa and is fast becoming a marketable product.",
    "https://i.pinimg.com/474x/cd/c0/c3/cdc0c37c859a3f87210dc77406e7850f.jpg"
  );
  let item8 = new StoreItem(
    "8",
    "Okro Soup",
    30,
    200,
    10,
    "Soup",
    5,
    [],
    "Okro soup is prepared using the edible green seed pods of the okra flowering plant as a primary ingredient. Other vegetables can be added to the soup as well, such as ewedu, kerenkere, or Ugu leaf.",
    "https://i.pinimg.com/474x/3e/ec/f0/3eecf09c7bef3ac2af73344c484eb3e1.jpg"
  );
  let item9 = new StoreItem(
    "9",
    "Plantain",
    30,
    400,
    20,
    "Raw",
    5,
    [],
    "Plantain is a fruit that resembles a banana and is almost always cooked. Fried plantains are delicious. Plantains are very starchy, green, and not as sweet as bananas.",
    "https://i.pinimg.com/474x/19/61/4e/19614e68eaeac39001c4b3c16fd843ab.jpg"
  );
  let item10 = new StoreItem(
    "10",
    "Jollof rice",
    30,
    250,
    10,
    "Ready to Eat",
    5,
    [],
    "Jollof rice is a beloved West African dish with many regional variations. It's made with a unique blend of spices, long-grain rice, and a tomato and red pepper base.",
    "https://i.pinimg.com/474x/59/22/b4/5922b49b001d890c56ef757da1450598.jpg"
  );
  let item11 = new StoreItem(
    "11",
    "Efo riro",
    30,
    300,
    10,
    "Soup",
    5,
    [],
    "Efo means ”Green leafy vegetable” or ”spinach”, and riro, means ”to stir”. So basically, Efo riro simply means ”stirred leafy vegetable”.",
    "https://i.pinimg.com/474x/7e/4f/99/7e4f996e0c5fd99c5115460361b7289d.jpg"
  );
  let item12 = new StoreItem(
    "12",
    "White Soup",
    30,
    200,
    10,
    "Soup",
    5,
    [],
    "White soup is a very rich fresh fish soup, traditionally made with Catfish and yam, it is a meal famous to the eastern tribe and riverine area of Nigeria.",
    "https://i.pinimg.com/474x/70/62/b7/7062b7d191df1558da4ee181ad5eab2b.jpg"
  );
  let item13 = new StoreItem(
    "13",
    "Yam",
    30,
    500,
    20,
    "Raw",
    5,
    [],
    "Yams are starchy staples in the form of large tubers produced by annual and perennial vines grown in Africa, the Americas, the Caribbean, South Pacific and Asia.",
    "https://i.pinimg.com/474x/74/83/aa/7483aa8e251ba9d90e45dbcf823ac289.jpg"
  );
  let item14 = new StoreItem(
    "14",
    "Pounded Yam",
    30,
    200,
    10,
    "Ready to eat",
    5,
    [],
    "Pounded yam is a Nigerian swallow food native to the Yoruba, Igbo Edo, Tiv and Ebira ethnic groups. It is a traditional food prepared by pounding boiled yam with a mortar and pestle. Pounded yam is similar to mashed potatoes but heavier in consistency.",
    "https://i.pinimg.com/474x/59/ae/74/59ae741c70a58b6bebe4fc1772c951e5.jpg"
  );
  let item15 = new StoreItem(
    "15",
    "Semovita",
    30,
    200,
    10,
    "Ready to eat",
    5,
    [],
    "Semovita a popular meal made into swallows that are eaten with traditional soups in West Africa. Semolina is made from coarsely ground durum wheat. It is best served with stews and vegetable soups.",
    "https://i.pinimg.com/474x/c7/1b/64/c71b64ade4fa59043a408dea8602388a.jpg"
  );

  // Create an initialize function that will be called when the page loads
  function initialize() {
    dayTime();
    storeItems.push(
      item1,
      item2,
      item3,
      item4,
      item5,
      item6,
      item7,
      item8,
      item9,
      item10,
      item11,
      item12,
      item13,
      item14,
      item15
    );
    cartItems;
    displayStoreItems();
    displayCartItems();
  }
  initialize();

  // Function to display current Day/time
  function dayTime() {
    const dateArea = document.getElementById("dateArea");
    let dayTime = new Date();
    dateArea.innerHTML = dayTime;
  }

  // Function to create table row
  function createRow(data) {
    const row = document.createElement("tr");
    row.id = `row-${data.id}`;

    Object.keys(data).forEach((key) => {
      const cell = document.createElement("td");

      if (key === "image") {
        const img = document.createElement("img");
        img.src = data[key];
        img.style.width = "200px";
        img.style.height = "150px";
        cell.innerHTML = ""; // Clear existing content
        cell.appendChild(img);
        row.appendChild(cell);
      } else {
        cell.textContent = data[key];
        row.appendChild(cell);
      }
    });

    return row;
  }

  // Function to check if a row with given ID exists
  function rowExists(tableId, id) {
    const table = document.getElementById(tableId);
    if (table) {
      return !!table.querySelector(`#row-${id}`);
    }
    return false;
  }

  // Function to update or create table row
  function updateOrCreateRow(table, data, extraData) {
    let row = table.querySelector(`#row-${data.id}`);
    if ((row && data.quantity <= 0) || data.quantity <= 0) {
      table.removeChild(row);
    }
    if (!row) {
      row = createRow(data);
      table.appendChild(row);
    } else {
      Object.keys(data).forEach((key) => {
        if (key === "image") {
          const img = row.querySelector(`img`); // Get existing image if it exists
          if (img) {
            img.src = data[key]; // Update src attribute
          } else {
            const newImg = document.createElement("img");
            newImg.src = data[key];
            newImg.style.width = "200px";
            newImg.style.height = "150px";
            row
              .querySelector(
                `td:nth-child(${
                  Object.keys(extraData[0]).indexOf(key) + 1
                })`
              )
              .appendChild(newImg);
          }
        } else {
          row.querySelector(
            `td:nth-child(${Object.keys(extraData[0]).indexOf(key) + 1})`
          ).textContent = data[key];
        }
      });
    }
  }

  // Function to display store items
  function displayStoreItems() {
    const inventoryOutput = document.getElementById("inventoryOutput");
    let table = document.getElementById("storeItemTable"); // Create table if it doesn't exist

    if (!table) {
      table = document.createElement("table");
      table.id = "storeItemTable";
      inventoryOutput.appendChild(table);
    } // Add table data
    storeItems.forEach((item) => {
      if (item.quantityOnHand > 0) {
        updateOrCreateRow(table, item, storeItems);
      }
    });
  }

  // Function to display cart items
  function displayCartItems() {
    const cartOutput = document.getElementById("cartOutput");
    let table = document.getElementById("cartItemTable"); // Create table if it doesn't exist

    if (table) {
      table.innerHTML = "";
    }
    if (!table) {
      table = document.createElement("table");
      table.id = "cartItemTable";
      cartOutput.appendChild(table);
    }

    cartItems.forEach((item) => {
      updateOrCreateRow(table, item, cartItems);
    });
  }

  //function Create cartTotal
  function cartTotals() {
    let subtotal = 0;
    let shipping = 0;

    // Calculate subtotal and shipping
    cartItems.forEach((item) => {
      subtotal += item.price * item.quantity;
      shipping += item.shipping * item.quantity;
    });

    // Calculate tax (fixed rate, e.g., 13%)
    const taxRate = 0.13;
    const tax = subtotal * taxRate;

    // Calculate total
    const total = subtotal + shipping + tax;

    // Display the calculated totals on the webpage
    let cartTotal = document.getElementById("cartCheckout");
    cartTotal.innerHTML = `SubTotal: ${convertPrice(subtotal)} 
    \n Shipping: ${convertPrice(shipping)} 
    \n Tax: ${convertPrice(tax)} 
    \n Total:${convertPrice(total)}`;
  }

  //Question 7
  // create a convert price function
  function convertPrice(price) {
    let currency = document.getElementById("currencySelector").value;

    if (currency === "CAD") {
      return `CAD$: ${price}`;
    } else if (currency === "USD") {
      return `USD$: ${price * 0.74} `;
    } else if (currency === "GBP") {
      return `GBP: ${price * 0.58}  `;
    } else if (currency === "NGN") {
      return `NGN: ${price * 1045.55}  `;
    }
  }

  //Question 8
  //Function to Add to cart

  function addToCart() {
    let addToCart = document.getElementById("addButton");
    let addItemId = document.getElementById("addItemId");
    let addItemQty = document.getElementById("addItemQty");

    // Basic validation
    if (!addItemId.value || !addItemQty.value) {
      alert("Please fill in all required fields.");
      return;
    }

    const storeItem = storeItems.find(
      (item) => item.id === String(addItemId.value)
    );

    const item = cartItems.find(
      (item) => item.id === String(addItemId.value)
    );

    if (item) {
      item.quantity += Number(addItemQty.value);

      if (item.quantity > storeItem.maxPerCustomer) {
        item.quantity = storeItem.maxPerCustomer;
      }

      storeItem.quantityOnHand -= Number(addItemQty.value);
    } else {
      storeItem.quantityOnHand -= Number(addItemQty.value);
      cartItems.push(
        new CartItem(
          storeItem.id,
          // storeItem.quantityOnHand,
          storeItem.price,
          Number(addItemQty.value),
          storeItem.costOfShipping
        )
      );
    }
    displayCartItems();
    displayStoreItems();
    cartTotals();
  }

  // Question 9
  function removeFromCart() {
    let removeItemId = document.getElementById("addItemId");
    let removeItemQty = document.getElementById("addItemQty");

    const storeItem = storeItems.find(
      (item) => item.id === String(addItemId.value)
    );

    const itemIndex = cartItems.findIndex(
      (item) => item.id === String(removeItemId.value)
    );

    if (itemIndex !== -1) {
      const item = cartItems[itemIndex];
      if (item.quantity <= 0) {
        return;
      }
      item.quantity -= Number(removeItemQty.value);

      storeItem.quantityOnHand += Number(removeItemQty.value);

      if (item.quantity === 0) {
        cartItems.splice(itemIndex, 1);
      }

      displayCartItems();
      displayStoreItems();
      cartTotals();
    }
  }
  // Question 10
  // Function to review an item
  function reviewItem() {
    const itemId = document.getElementById("reviewId").value;
    const reviewDesc = document.getElementById("reviewDesc").value;
    const reviewNum = document.getElementById("reviewNum").value;

    // Validate item ID
    if (!itemId) {
      document.getElementById("reviewIdMsg").textContent =
        "Please enter an item ID";
      return;
    }

    const storeItem = storeItems.find((item) => item.id === itemId);
    if (!storeItem) {
      document.getElementById("reviewIdMsg").textContent = "Item not found";
      return;
    }

    // Validate rating
    if (reviewNum < 1 || reviewNum > 5) {
      document.getElementById("addRatingValidationMessage").textContent =
        "Rating must be between 1 and 5";
      return;
    }

    // Add review to the item
    storeItem.reviews.push({
      review: Number(reviewNum),
      rating: reviewDesc,
    });

    // Display updated item details
    displayItemDetails();
    // Clear input fields and validation messages
    document.getElementById("reviewId").value = "";
    document.getElementById("reviewDesc").value = "";
    document.getElementById("reviewNum").value = "";
    document.getElementById("reviewIdMsg").textContent = "";
    document.getElementById("addRatingValidationMessage").textContent = "";
  }

  // Function to display item details
  function displayItemDetails() {
    let addItemId = document.getElementById("addItemId");
    let reviewId = document.getElementById("reviewId");
    const itemId = addItemId.value || reviewId.value;

    const item = storeItems.find((item) => item.id === itemId);

    const itemDetails = document.getElementById("itemDetails");
    itemDetails.innerHTML = `
<h2>${item.name}</h2>
<p>Description: ${item.description}</p>
<p>Price: ${item.price}</p>
<p>Category: ${item.category}</p>
<p>Quantity on Hand: ${item.quantityOnHand}</p>
<p>Max Per Customer: ${item.maxPerCustomer}</p>
<h3>Reviews</h3>
<ul>
  ${item.reviews
    .map(
      (review) => `<li> ${review.rating} - Rating: ${review.review}</li>`
    )
    .join("")}
</ul>
<p>Average Rating: ${calculateAverageRating(item.reviews)}</p>
`;
  }

  // Function to calculate average rating
  function calculateAverageRating(reviews) {
    if (reviews.length === 0) return "No ratings yet";
    const totalRating = reviews.reduce((acc, cur) => acc + cur.review, 0);

    return (totalRating / reviews.length).toFixed(1);
  }