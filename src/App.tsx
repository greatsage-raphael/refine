import { Refine } from "@pankod/refine-core";
import routerProvider from "@pankod/refine-react-router-v6";
import dataProvider from "@pankod/refine-simple-rest";
import {
    ChakraProvider,
    ErrorComponent,
    Layout,
    refineTheme,
    ReadyPage,
    notificationProvider,
} from "@pankod/refine-chakra-ui";
import { ChakraUIInferencer } from "@pankod/refine-inferencer/chakra-ui";

const App = () => {
    return (
        <ChakraProvider theme={refineTheme}>
            <Refine
                notificationProvider={notificationProvider()}
                routerProvider={routerProvider}
                dataProvider={dataProvider("https://nekos.best/api/v2")}
                Layout={Layout}
                ReadyPage={ReadyPage}
                catchAll={<ErrorComponent />}
                resources={[
                    {
                        name: "endpoints",
                        list: ChakraUIInferencer,
                        show: ChakraUIInferencer,
                        create: ChakraUIInferencer,
                        edit: ChakraUIInferencer,
                    },
                ]}
            />
        </ChakraProvider>
    );
};

export default App;