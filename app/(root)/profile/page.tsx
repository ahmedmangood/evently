import Collection from "@/components/shared/Collection";
import { Button } from "@/components/ui/button";
import { getEventsByUser } from "@/lib/database/actions/event.actions";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

const ProfilePage = async () => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;
  const organizedEvents = await getEventsByUser({ userId, page: 1 });
  return (
    <>
      {/* {My Tickets} */}
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h2-bold text-center sm:text-left">My Tickets</h3>
          <Button className="button hidden sm:flex" size={"lg"} asChild>
            <Link href={"/#events"}>Explore More Events</Link>
          </Button>
        </div>
      </section>
      {/* <section className="wrapper my-8">
        <Collection
          data={events?.data}
          emptyTitle="No event tickets purchased yet"
          emptyStateSubtext="No worries - plenty of exciting events to expolre!"
          collectionType="My_Tickets"
          limit={3}
          page={1}
          urlParamName="ordersPage"
          totalPages={2}
        />
      </section> */}
      {/* {Events Organized} */}
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h2-bold text-center sm:text-left">Events Organized</h3>
          <Button className="button hidden sm:flex" size={"lg"} asChild>
            <Link href={"/events/create"}>Create New Event</Link>
          </Button>
        </div>
      </section>
      <section className="wrapper my-8">
        <Collection
          data={organizedEvents?.data}
          emptyTitle="No events have been created yet"
          emptyStateSubtext="Go create some now"
          collectionType="Events_Organized"
          limit={6}
          page={1}
          urlParamName="eventsPage"
          totalPages={2}
        />
      </section>
    </>
  );
};

export default ProfilePage;
