import { lazy, ReactElement } from "react";

function LazyComponent(id: string): ReactElement {
  const DynamicComponent = lazy(() => import(`../components/tabs/${id}`));
  return <DynamicComponent />;
}

export default LazyComponent;

