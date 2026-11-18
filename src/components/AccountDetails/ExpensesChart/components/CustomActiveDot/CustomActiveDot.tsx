import {formatAmount} from "../../utils/formatAmount.ts";
import type {ActiveDotProps} from "./ActiveDotProps.types.ts";


export function CustomActiveDot({cx, cy, value, payload}: ActiveDotProps) {
    const amount = payload?.amount ?? value;

    if (
        cx === undefined ||
        cy === undefined ||
        amount === undefined ||
        !Number.isFinite(Number(amount))
    ) {
        return null;
    }

    const formattedAmount = formatAmount(Number(amount));
    const tooltipWidth = formattedAmount.length * 7 + 20;

    return (
        <g
            style={{
                transition: 'transform 180ms ease-out',
            }}
            transform={`translate(${cx}, ${cy})`}
        >
            {/* Вертикальная линия */}
            <line
                x1={0}
                x2={0}
                y1={0}
                y2={300 - cy}
                stroke="#F29B38"
                strokeWidth={1}
                opacity={0.8}
            />

            {/* Маркер */}
            <circle
                cx={0}
                cy={0}
                r={5}
                fill="#fff"
                stroke="#F29B38"
                strokeWidth={2}
            />

            {/* Окошко с суммой */}
            <rect
                x={12}
                y={-42}
                width={tooltipWidth}
                height={30}
                rx={6}
                fill="#fff"
                stroke="#E5E5E5"
            />

            <text
                x={22}
                y={-22}
                fill="#666"
                fontSize={13}
                fontWeight={500}
            >
                {formattedAmount}
            </text>
        </g>
    )
}