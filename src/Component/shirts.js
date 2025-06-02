const ShirtDetailPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const shirt = location.state?.shirt;

  if (!shirt) {
    return <Typography variant="h6">Shirt not found</Typography>;
  }

  const handlePayment = async () => {
    const res = await loadRazorpay("https://checkout.razorpay.com/v1/checkout.js");
    if (!res) {
      alert("Razorpay SDK failed to load.");
      return;
    }

    const options = {
      key: "rzp_live_MoRSzBNKgPxVWd",
      amount: shirt.price * 100,
      currency: "INR",
      name: "My Shirt Store",
      description: shirt.name,
      image: shirt.img,
      handler: function (response) {
        alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
      },
      prefill: {
        name: "Bala",
        email: "balamala0306@gmail.com",
        contact: "9999999999",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <Box p={2}>
      <img src={shirt.img} alt={shirt.name} width="100%" style={{ maxWidth: 400 }} />
      <Typography variant="h6">{shirt.name}</Typography>
      <Typography color="textSecondary">{shirt.fabric}</Typography>
      <Typography variant="h5">₹ {shirt.price}</Typography>
      <Button variant="contained" color="primary" onClick={handlePayment}>
        Buy Now
      </Button>
    </Box>
  );
};
