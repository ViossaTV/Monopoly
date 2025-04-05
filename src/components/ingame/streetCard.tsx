import RailIcon from "../../../public/rails.png";
import ElectricityIcon from "../../../public/elects.png";
import WaterIcon from "../../../public/water.png";

export interface StreetDisplayInfo {
    title: string;
    rent: number;
    rentWithColorSet: number;
    multpliedrent: [number, number, number, number, number];
    housesCost: number;
    hotelsCost: number;
    cardCost: number;
    group: string;
}

export interface UtilitiesDisplayInfo {
    title: string;
    cardCost: number;
    type: "water" | "electricity";
}
export interface RailroadDisplayInfo {
    title: string;
    cardCost: number;
}
export function translateGroup(s: string) {
    try {
        switch (s.toLowerCase()) {
            case "red":
                return "#ED1B24";
            case "darkgreen":
                return "#1FB25A";
            case "darkblue":
                return "#0072BB";
            case "yellow":
                return "#FEF200";
            case "purple":
                return "#955436";
            case "lightgreen":
                return "#AAE0FA";
            case "orange":
                return "#F7941D";
            case "violet":
                return "#D93A96";
            default:
                return s.toLowerCase();
        }
    } catch {
        return s;
    }
}
export default function selector({
    street,
    utility,
    railroad,
}: {
    street?: StreetDisplayInfo;
    utility?: UtilitiesDisplayInfo;
    railroad?: RailroadDisplayInfo;
}) {
    if (street !== undefined) {
        return <StreetCard args={street} />;
    } else if (utility !== undefined) {
        return <UtilityCard args={utility} />;
    } else if (railroad !== undefined) {
        return <RailroadCard args={railroad} />;
    } else {
        return <></>;
    }
}

function StreetCard({ args }: { args: StreetDisplayInfo }) {
    const _color = translateGroup(args.group);
    return (
        <div className="street-card">
            <div style={{ backgroundColor: _color }}>
                <p>Lantharting</p>
                <h3>{args.title}</h3>
            </div>
            <div>
                <ol>
                    <li>
                        <p>Mbogo</p>
                        <p>{args.rent} Ipni</p>
                    </li>
                    <li>
                        <p>Mbogo med fargekaban</p>
                        <p>{args.rentWithColorSet} Ipni</p>
                    </li>
                    <li>
                        <p>Mbogo med 1 huomi</p>
                        <p>{args.multpliedrent[0]} Ipni</p>
                    </li>
                    <li>
                        <p>Mbogo med 2 huomi</p>
                        <p>{args.multpliedrent[1]} Ipni</p>
                    </li>
                    <li>
                        <p>Mbogo med 3 huomi</p>
                        <p>{args.multpliedrent[2]} Ipni</p>
                    </li>
                    <li>
                        <p>Mbogo med 4 huomi</p>
                        <p>{args.multpliedrent[3]} Ipni</p>
                    </li>
                    <li>
                        <p>Mbogo med mbogohuomi</p>
                        <p>{args.multpliedrent[4]} Ipni</p>
                    </li>
                </ol>
                <hr />
                <ol>
                    <li>
                        <p>Kerras fu huomi</p>
                        <p>{args.housesCost} Ipni each</p>
                    </li>
                    <li>
                        <p>Kerras fu mbogohuomi</p>
                        <label>
                            {args.hotelsCost} Ipni each
                            <br />
                            <p style={{ fontSize: 12 }}>(au 4 huomi)</p>
                        </label>
                    </li>
                </ol>

                <br />
                <hr />
                <h4>{args.cardCost} ipni</h4>
            </div>
        </div>
    );
}

function RailroadCard({ args }: { args: RailroadDisplayInfo }) {
    return (
        <div className="street-card">
            <div data-clear>
                <img
                    data-type="rail"
                    src={RailIcon.replace("/public", "")}
                    alt=""
                />
                <h3>{args.title}</h3>
            </div>
            <div>
                <ol>
                    <li>
                        <p>Rent</p>
                        <p>{25}M</p>
                    </li>
                    <li>
                        <p>If 2 stations are owned</p>
                        <p>{50}M</p>
                    </li>
                    <li>
                        <p>If 3 stations are owned</p>
                        <p>{100}M</p>
                    </li>
                    <li>
                        <p>If 4 stations are owned</p>
                        <p>{200}M</p>
                    </li>
                </ol>
                <h4>mortgage Value 100M</h4>
                <hr />
                <br />
                <h4>{args.cardCost}M</h4>
            </div>
        </div>
    );
}

function UtilityCard({ args }: { args: UtilitiesDisplayInfo }) {
    return (
        <div className="street-card">
            <div data-clear>
                <center>
                    <img
                        data-type={args.type}
                        src={
                            args.type === "electricity"
                                ? ElectricityIcon.replace("/public", "")
                                : WaterIcon.replace("/public", "")
                        }
                        alt=""
                    />
                </center>
                <h3>{args.title}</h3>
            </div>
            <div>
                <p style={{ lineHeight: 1, paddingInline: 10 }}>
                    If one Utility is owned, rent is 4 times amount shown on
                    dice.
                    <br />
                    <br />
                    If both Utilities are owned, rent is 10 times amount shown
                    on dice
                </p>
                <hr />
                <br />
                <h4>{args.cardCost}M</h4>
            </div>
        </div>
    );
}
