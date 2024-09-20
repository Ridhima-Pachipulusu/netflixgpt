export const Options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzN2E2ZjQ2MDQ4NzQwYmFkZGM2N2M2NDFmMzQ2ZjI4ZCIsIm5iZiI6MTcyNjMxNjU2Mi41MjkzNzgsInN1YiI6IjY2ZTJkOTgwMDAwMDAwMDAwMGI5MjM5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hZQzZklOeyMDzF2j7oMjgFbKcdACc078eML93Ubisr4",
  },
};
export const card = "https://image.tmdb.org/t/p/w500";
export const play = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="currentColor"
    className="bi bi-play-fill"
    viewBox="0 0 16 16"
  >
    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
  </svg>
);
export const info = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="currentColor"
    className="bi bi-info-circle"
    viewBox="0 0 16 16"
  >
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
  </svg>
);
export const groq_api_key =
  "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";
export const SearchIcon = (
  <svg
  xmlns="http://www.w3.org/2000/svg"
  x="0px"
  y="0px"
  width="50"
  height="50"
  viewBox="0,0,300,150"
>
  <g
    fill="#ffffff"
    fillRule="nonzero"
    stroke="none"
    strokeWidth="1"
    strokeLinecap="butt"
    strokeLinejoin="miter"
    strokeMiterlimit="10"
    strokeDasharray=""
    strokeDashoffset="0"
    fontFamily="none"
    fontWeight="none"
    fontSize="none"
    textAnchor="none"
    style={{ mixBlendMode: "normal" }} 
  >
    <g transform="scale(2,2)">
      <path d="M52.34961,14.40039c-9.725,0 -19.44961,3.69961 -26.84961,11.09961c-14.8,14.8 -14.8,38.89922 0,53.69922c7.4,7.4 17.10039,11.10156 26.90039,11.10156c9.8,0 19.50039,-3.70156 26.90039,-11.10156c14.7,-14.8 14.69844,-38.89922 -0.10156,-53.69922c-7.4,-7.4 -17.12461,-11.09961 -26.84961,-11.09961zM52.30078,20.30078c8.2,0 16.39961,3.09844 22.59961,9.39844c12.5,12.5 12.49961,32.80078 0.09961,45.30078c-12.5,12.5 -32.80078,12.5 -45.30078,0c-12.5,-12.5 -12.5,-32.80078 0,-45.30078c6.2,-6.2 14.40156,-9.39844 22.60156,-9.39844zM52.30078,26.30078c-6.9,0 -13.40078,2.69922 -18.30078,7.69922c-4.7,4.7 -7.29961,10.80039 -7.59961,17.40039c-0.1,1.7 1.20039,2.99961 2.90039,3.09961h0.09961c1.6,0 2.9,-1.30039 3,-2.90039c0.2,-5.1 2.29883,-9.80039 5.79883,-13.40039c3.8,-3.8 8.80156,-5.89844 14.10156,-5.89844c1.7,0 3,-1.3 3,-3c0,-1.7 -1.3,-3 -3,-3zM35,64c-1.65685,0 -3,1.34315 -3,3c0,1.65685 1.34315,3 3,3c1.65685,0 3,-1.34315 3,-3c0,-1.65685 -1.34315,-3 -3,-3zM83.36328,80.5c-0.7625,0 -1.5125,0.30039 -2.0625,0.90039c-1.2,1.2 -1.2,3.09922 0,4.19922l2.5,2.5c-0.6,1.2 -0.90039,2.50039 -0.90039,3.90039c0,2.4 0.89961,4.70039 2.59961,6.40039l12.80078,12.59961c1.8,1.8 4.09844,2.69922 6.39844,2.69922c2.3,0 4.60039,-0.89961 6.40039,-2.59961c3.5,-3.5 3.5,-9.19922 0,-12.69922l-12.79883,-12.80078c-1.7,-1.7 -4.00039,-2.59961 -6.40039,-2.59961c-1.4,0 -2.70039,0.30039 -3.90039,0.90039l-2.5,-2.5c-0.6,-0.6 -1.37422,-0.90039 -2.13672,-0.90039zM91.90039,88.90039c0.8,0 1.59961,0.30039 2.09961,0.90039l12.69922,12.69922c1.2,1.2 1.2,3.09922 0,4.19922c-1.2,1.2 -3.09922,1.2 -4.19922,0l-12.69922,-12.59961c-0.6,-0.6 -0.90039,-1.39922 -0.90039,-2.19922c0,-0.8 0.30039,-1.59961 0.90039,-2.09961c0.6,-0.6 1.29961,-0.90039 2.09961,-0.90039z"></path>
    </g>
  </g>
</svg>
);
export const Signout = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="36"
    height="36"
    fill="currentColor"
    className="bi bi-door-closed"
    viewBox="0 0 16 16"
  >
    <path d="M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3zm1 13h8V2H4z" />
    <path d="M9 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
  </svg>
);
