export default function ServiceIcon({ name, className = "h-6 w-6" }) {
  const props = {
    className,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true",
  };

  switch (name) {
    case "conveyor":
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 12h16M6 16h12M8 8h8M5 12v4m14-4v4" />
        </svg>
      );
    case "screw":
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 4v16M8 8c2 1 6 1 8 0M8 12c2 1 6 1 8 0M8 16c2 1 6 1 8 0" />
        </svg>
      );
    case "gate":
    case "gateSwing":
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 20V6a2 2 0 012-2h12a2 2 0 012 2v14M4 20h16M9 10h.01M15 10h.01M9 14h6" />
        </svg>
      );
    case "ss":
    case "ms":
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-7 7m7-7l-7-7" />
        </svg>
      );
    case "fire":
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 3c2 3 5 4.5 5 8a5 5 0 11-10 0c0-2.5 1.5-4 3-5.5C11 7 11.5 5.5 12 3z" />
        </svg>
      );
    case "boiler":
    case "piping":
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 8h4v8H4zm12 0h4v8h-4zM8 12h8M10 6v2m4 8v2" />
        </svg>
      );
    case "blower":
    case "fan":
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 12m-2 0a2 2 0 104 0 2 2 0 10-4 0M12 4v4m0 8v4m8-8h-4M8 12H4m11.5-5.5L13 9m-2 6l-2.5 2.5m0-11L11 9m2 6l2.5 2.5" />
        </svg>
      );
    case "chimney":
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 21V8l3-4 3 4v13M7 21h10M11 11h2M11 15h2" />
        </svg>
      );
    case "vacuum":
    case "dust":
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M5 14a5 5 0 0110 0v7H5v-7zm10 3h3a2 2 0 002-2v-1a4 4 0 00-4-4h-1" />
        </svg>
      );
    case "structure":
    case "stairs":
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 20h16M6 20V10l6-6 6 6v10M10 20v-4h4v4" />
        </svg>
      );
    case "tank":
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M7 8a5 5 0 0110 0v10a2 2 0 01-2 2H9a2 2 0 01-2-2V8zM9 12h6" />
        </svg>
      );
    case "custom":
    default:
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.504-.616 1.37-.897 2.182-.68l.852.242a2.65 2.65 0 001.745-.455l2.318-1.737a2.65 2.65 0 00.82-3.18l-.852-1.476a2.65 2.65 0 00-2.948-1.27l-1.036.3c-.81.235-1.677-.046-2.182-.662L11.42 2.5" />
        </svg>
      );
  }
}
