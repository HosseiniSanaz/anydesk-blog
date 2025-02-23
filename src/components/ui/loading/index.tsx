import {LoadingWrapper, Spinner} from "./styles";

function Loading() {
    return (
        <LoadingWrapper data-testid="loading">
            <Spinner/>
        </LoadingWrapper>
    );
}

export default Loading;
