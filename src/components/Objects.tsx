import { useState } from "react";

function Objects() {
  // ✅ useState for an object with primitive values (title, price)
  const [drink, setDrink] = useState({
    title: "Beer",
    price: 5,
  });

  // ✅ useState for a deeply nested object (customer contains address object)
  const [customer, setCustomer] = useState({
    name: "Stevan",
    address: {
      city: "Sydney",
      country: "Australia",
      zipCode: "2000",
    },
  });

  // ✅ This function updates part of a deeply nested object (address.city and address.zipCode)
  function handleClickCustomer() {
    setCustomer({
      ...customer, // Copy the rest of the customer object (e.g. name)

      address: {
        // ⚠️ Always create a new nested object, do NOT mutate the original
        ...customer.address, // Copy all address fields
        city: "Melbourne", // Override only what needs to change
        zipCode: "3000", // Example: also updating zip code
      },
    });
  }

  // ✅ This function updates the drink object
  function handleClick() {
    // ❌ WRONG WAY:
    // setDrink({ title: "Wine", price: 10 });
    // This would still work in this case, but it REPLACES the entire object.
    // It's risky when the object has more fields — you might accidentally remove them.

    // ✅ CORRECT WAY:
    // Always spread the previous state and override only what changes
    setDrink({ ...drink, title: "Wine", price: 10 });

    // This keeps React state immutable, which ensures consistent re-renders
  }

  return (
    <div className="d-flex flex-column gap-2">
      {/* ✅ Updates and displays the drink info */}
      <button onClick={handleClick}>
        CLICK TO UPDATE
        <h4>{`Title: ${drink.title}, Price: $${drink.price}`}</h4>
      </button>

      {/* ✅ Updates and displays customer location info */}
      <button onClick={handleClickCustomer}>
        CLICK TO UPDATE
        <h4>
          {`My details: ${customer.name} ${customer.address.city} ${customer.address.zipCode}`}
        </h4>
      </button>
    </div>
  );
}

export default Objects;
