import { Suspense } from "react";
import OrderList from "./OrderList";
import Loading from "./loading";

export default function Dashboard() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <OrderList />
      </Suspense>
    </div>
  );
}
