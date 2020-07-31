(function () {
  var ITEM_COUNT = 50;

  var currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  var rawData = Array.from(Array(ITEM_COUNT)).map((id) => ({
    id: id,
    imageUrl: faker.image.imageUrl(160, 160, undefined, true),
    name: faker.lorem.words(),
    price: 24.99,
  }));

  var data = (search) =>
    rawData.filter(
      (item) => item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
    );

  var MusicShop = () => {
    var [search, setSearch] = React.useState("");

    return React.createElement(
      "div",
      {
        class: "container",
      },
      [
        React.createElement("h1", null, "The Music Shop"),
        React.createElement(
          "input",
          {
            class: "search",
            onChange: (e) => setSearch(e.target.value),
            placeholder: "Search...",
            value: search,
          },
          null
        ),
        React.createElement(
          "div",
          { class: "items-container" },
          data(search).map((item) =>
            React.createElement("div", { class: "item" }, [
              React.createElement(
                "img",
                {
                  class: "item__image",
                  src: item.imageUrl,
                },
                null
              ),
              React.createElement(
                "div",
                {
                  class: "item__name",
                },
                item.name
              ),
              React.createElement(
                "div",
                {
                  class: "item__price",
                },
                currencyFormatter.format(item.price)
              ),
              React.createElement(
                "button",
                {
                  class: "item__button",
                },
                "Buy Now"
              ),
            ])
          )
        ),
      ]
    );
  };

  ReactDOM.render(
    React.createElement(MusicShop, null, null),
    document.getElementById("root")
  );
})();
