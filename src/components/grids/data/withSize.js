import * as React from "react";
import AutoSizer from "react-virtualized-auto-sizer";

interface WithSizeProps {
    width: number;
    height: number;
}

export function withSize(minHeight = 300) {
    return <TProps extends WithSizeProps>(OriginalComponent: React.ComponentClass<TProps>) => {
        return class WithSize extends React.Component<Omit<TProps, "width" | "height">> {
            render() {
                return (
                    <AutoSizer style={{ minHeight }}>
                        {({ height, width }) => {
                            return (
                                <OriginalComponent
                                    {...this.props as TProps}
                                    height={height}
                                    width={width} />
                            );
                        }}
                    </AutoSizer>
                );
            }
        };
    };
}