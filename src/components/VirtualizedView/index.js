import React, { useState, useEffect } from 'react';
import {
    FlatList
} from 'react-native';
export function VirtualizedView(props: any) {
    return (
        <FlatList
            data={[]}
            ListEmptyComponent={null}
            keyExtractor={() => "dummy"}
            renderItem={null}
            ListHeaderComponent={() => (
                <React.Fragment>{props.children}</React.Fragment>
            )}
        />
    );
}