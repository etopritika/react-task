import { lazy } from "react";

function LazyComponent(id: string) {
  const DynamicComponent = lazy(() => import(`../components/tabs/${id}`));
  return <DynamicComponent />;
}

export default LazyComponent;

