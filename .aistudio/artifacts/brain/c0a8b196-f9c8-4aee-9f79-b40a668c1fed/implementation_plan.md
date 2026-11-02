# Implementation Plan - TV Repair Status Tracker

Add a dedicated **Repair Status Tracker** section to `App.tsx` where customers can enter their repair ticket number (e.g., `IPX-7821`, `IPX-6402`) to track real-time repair progress, device diagnostics, assigned technician, and estimated completion date, with an interactive visual progress visualizer and quick-test demo tickets.

## User Requirements & Clarifications
- **Location**: Dedicated section on the page with a sticky header nav link ("Track Repair") and mobile menu entry for instant access.
- **Demo Tickets**: Quick-select demo chips for one-click testing of various repair states (In Repair, Diagnosis Complete, Ready for Pickup, Parts Sourced).
- **Design Alignment**: Clean, high-contrast, modern UI adhering to iPixel Electronics brand styling (slate-900, blue accents, emerald status indicators, clean typography, responsive layout).

---

## Proposed Changes

### 1. New Component: `src/components/RepairTracker.tsx`
Create a modular, production-ready repair tracker component:
- **Search Form**:
  - Clean input field with ticket search icon, clear button, and "Track Status" action button.
  - Interactive clickable sample ticket chips (e.g., `IPX-7821` [In Progress - Flex Bonding], `IPX-6402` [Diagnostic Complete], `IPX-9104` [Ready for Pickup], `IPX-5510` [Parts On Order]).
- **Visual Status Stepper**:
  - 6-stage repair pipeline:
    1. *Ticket Created* (Logged & Checked in)
    2. *Diagnostic Complete* (Internal voltage & screen test)
    3. *Parts Sourced* (COF IC / Backlight LEDs / Board)
    4. *Hardware Repair* (Precision laser bonding / component replacement)
    5. *Quality Assurance* (Burn-in screen test & color calibration)
    6. *Ready for Pickup / Delivery*
  - Animated progress bar and active stage pulsing indicator with timestamp logs.
- **Repair Details Card**:
  - Customer name, TV model & screen size, reported symptom, diagnosed root cause, assigned master technician.
  - Estimated delivery/pickup time window and warranty period (up to 180 days).
  - Activity log with technician notes.
- **Direct Support CTAs**:
  - "Call Technician" (+91 95131 34313)
  - "Get WhatsApp Update"
  - "Download Job Sheet Summary" / print-friendly action.
- **Not Found / Fallback State**:
  - Helpful error message if an unknown ticket is entered, with direct phone helpline assistance and 1-click demo ticket recovery.

---

### 2. Integration in `src/App.tsx`
- **Navigation Links**:
  - Add a "Track Repair" navigation button in the desktop header nav between Services and Troubleshooting.
  - Add "Track Repair" to the mobile slide-out menu drawer with an intuitive icon.
  - Clicking "Track Repair" smoothly scrolls to the `#repair-tracker` section (or switches to home view first if on another view like Location or Guides).
- **Section Placement**:
  - Mount `<RepairTracker />` in the main home view (`view === 'home'`) with an identifiable section ID and header tag.
  - Provide smooth-scrolling handler `scrollToRepairTracker()`.

---

## Verification Plan

### Automated Verification
1. Run `lint_applet` (`npm run lint` / `tsc --noEmit`) to verify zero TypeScript errors or missing imports.
2. Run `compile_applet` (`npm run build`) to ensure the production Vite bundle builds cleanly.

### Manual Verification
1. Verify "Track Repair" appears in the desktop header nav and mobile drawer.
2. Click "Track Repair" and verify it scrolls directly to the Repair Status Tracker section.
3. Test 1-click demo ticket buttons (`IPX-7821`, `IPX-6402`, `IPX-9104`, `IPX-5510`) and observe dynamic stage visualization, badges, technician info, and repair log updates.
4. Test typing a custom ticket number or an invalid number to verify proper validation and friendly error handling.
5. Verify mobile responsiveness across viewport sizes.
