import { Suspense } from "react";
import AppBar from "../AppBar/AppBar";
import { Outlet } from "react-router";

export default function Layout({children}) {
    return (
        <div>
            <AppBar></AppBar>
            <Suspense fallback={null}>{children}</Suspense>
      </div>
  )
}
