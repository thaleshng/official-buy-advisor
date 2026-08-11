import { ImageResponse } from "next/og"

export const size = {
  width: 32,
  height: 32,
}
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0f1424",
          borderRadius: "6px",
        }}
      >
        <svg width="22" height="22" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="22" fill="none" stroke="#f5f4f1" strokeWidth="2" />
          <circle
            cx="24"
            cy="24"
            r="17"
            fill="none"
            stroke="#c8963f"
            strokeWidth="2"
            strokeDasharray="2.4 3.6"
          />
          <path
            d="M15.5 24.5l5.5 5.5L33 17.5"
            fill="none"
            stroke="#f5f4f1"
            strokeWidth="3.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    },
  )
}
