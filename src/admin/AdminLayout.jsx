
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Funciones de carga dinámica (evita romper el frontend público)
function loadCSS(href, id) {
  if (!document.getElementById(id)) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    link.id = id;
    document.head.appendChild(link);
  }
}

function removeCSS(id) {
  const el = document.getElementById(id);
  if (el) el.remove();
}

function loadScript(src, id) {
  return new Promise((resolve) => {
    if (document.getElementById(id)) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.id = id;
    script.onload = resolve;
    document.body.appendChild(script);
  });
}

export default function AdminLayout({ children }) {
  const base = "/adminlte";

  useEffect(() => {
    // CSS
    loadCSS(`${base}/dist/css/adminlte.min.css`, "adminlte-css");
    loadCSS(`${base}/plugins/fontawesome-free/css/all.min.css`, "fa-css");
    loadCSS(`${base}/plugins/overlayScrollbars/css/OverlayScrollbars.min.css`, "scroll-css");

    // JS
    loadScript(`${base}/plugins/jquery/jquery.min.js`, "jquery-js")
      .then(() => loadScript(`${base}/plugins/bootstrap/js/bootstrap.bundle.min.js`, "bootstrap-js"))
      .then(() => loadScript(`${base}/dist/js/adminlte.min.js`, "adminlte-js"));

    return () => {
      removeCSS("adminlte-css");
      removeCSS("fa-css");
      removeCSS("scroll-css");
    };
  }, []);

  return (
    <div className="hold-transition sidebar-mini layout-fixed">
      <div className="wrapper">

        {/* Navbar */}
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" data-widget="pushmenu" href="#">
                <i className="fas fa-bars"></i>
              </a>
            </li>
          </ul>
        </nav>

        {/* Sidebar */}
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          <Link to="/admin" className="brand-link text-center">
            <span className="brand-text font-weight-light">Admin Huerto</span>
          </Link>

          <div className="sidebar">
            <nav className="mt-2">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
              >
                <li className="nav-item">
                  <Link to="/admin" className="nav-link">
                    <i className="nav-icon fas fa-boxes"></i>
                    <p>Productos</p>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    <i className="nav-icon fas fa-home"></i>
                    <p>Volver a la tienda</p>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </aside>

        {/* Content Wrapper */}
        <div className="content-wrapper p-4">
          {children}
        </div>

      </div>
    </div>
  );
}
