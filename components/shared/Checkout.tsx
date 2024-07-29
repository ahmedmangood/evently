import { IEvent } from "@/lib/database/models/event.model";
import React, { useEffect } from "react";
import { Button } from "../ui/button";

import { loadStripe } from "@stripe/stripe-js";
import { checkoutOrder } from "@/lib/database/actions/order.actions";

loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export const Checkout = ({
  event,
  userId,
}: {
  event: IEvent;
  userId: string;
}) => {
  const onCheckout = async () => {
    const order = {
      eventTitle: event.title,
      eventId: event._id,
      price: event.price,
      isFree: event.isFree,
      buyerId: userId,
    };
    await checkoutOrder(order);
  };

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
  }, []);

  return (
    <form action={onCheckout} method="post">
      <Button
        type="submit"
        size={"lg"}
        role="link"
        className="rounded-full button"
      >
        {event.isFree ? "Get Ticket Free" : `Buy Ticket by $${event.price}`}
      </Button>
    </form>
  );
};
