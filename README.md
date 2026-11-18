# LogisticsPro — Logistics Management System

A responsive, frontend-only logistics dashboard built with HTML, CSS and JavaScript modules. It follows the supplied internship brief and uses browser `localStorage` for demo persistence; no server or database is required.

## Run locally

Open `index.html` in a modern browser. Since the app uses native JavaScript modules, some browsers require a local static server. For example, run `python -m http.server 8000` from this folder and open `http://localhost:8000`.

## Modules

- **Dashboard** — operational KPIs, delivery performance chart and recent shipments.
- **Shipments** — searchable, filterable shipment list and shipment creation.
- **Fleet** — vehicles, service schedules, driver roster and status updates.
- **Warehouse** — facility capacity, inventory overview and stock adjustments.
- **Orders** — customer orders, shipment links and order status management.
- **Route planning** — illustrative route map and route recommendations/optimization simulation.
- **Live tracking** — shipment lookup, progress, route and delivery timeline.
- **Reports** — delivery and driver analytics, CSV export and print-to-PDF.
- **Login/register** — simulated browser-only account with demo credentials.

## File layout

```text
index.html
css/  main.css, layout.css, components.css, pages.css, responsive.css
js/   app.js, auth.js, data.js, utils.js, dashboard.js, shipments.js,
      fleet.js, warehouse.js, orders.js, routes.js, tracking.js, reports.js
```

Each page renderer lives in its own module. `data.js` holds the sample data and persistence; `utils.js` contains shared UI helpers; `app.js` connects navigation and interactions.

## Demo access

Email: `alex@logisticspro.demo`  
Password: `demo1234`

Sign out from the sidebar to open the simulated sign-in/register screen. Changes are saved in the current browser profile. Use browser developer tools to clear the `logisticspro-data-v1` and `logisticspro-user` local-storage keys to reset the demo.

## Notes

The route map is an illustrative local SVG and route optimization, notifications, accounts, and live shipment updates are simulated. No API keys, external map service, or backend credentials are used.
