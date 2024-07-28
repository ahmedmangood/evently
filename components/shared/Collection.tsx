import { IEvent } from "@/lib/database/models/event.model";
import Card from "./Card";

type CollectionProps = {
  data: IEvent[];
  emptyTitle: String;
  emptyStateSubtext: String;
  collectionType: "Events_Organized" | "My_Tickets" | "All_Events";
  limit: number;
  page: number | number;
  totalPages: number;
  urlParamName?: string;
};
const Collection = ({
  data,
  emptyTitle,
  emptyStateSubtext,
  collectionType,
  limit,
  page,
  totalPages = 0,
  urlParamName,
}: CollectionProps) => {
  return (
    <>
      {data.length > 0 ? (
        <div className="flex flex-col items-center gap-10">
          <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {data.map((event) => {
              const hasOrderLink = collectionType === "Events_Organized";
              const hidePrice = collectionType === "My_Tickets";
              return (
                <li key={event._id} className="flex justify-center">
                  <Card
                    event={event}
                    hasOrderLink={hasOrderLink}
                    hidePrice={hasOrderLink}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div className="flex-center wrapper w-full min-h-[200px] flex-col gap-3 rounded=[14px] bg-grey-50 py-28 text-center">
          <h3 className="p-bold-20 md:h-5">{emptyTitle}</h3>
          <p className="p-regular-14">{emptyStateSubtext}</p>
        </div>
      )}
    </>
  );
};

export default Collection;
