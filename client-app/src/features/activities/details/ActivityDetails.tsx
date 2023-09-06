import { Button, ButtonGroup, Card, Grid, Image } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ActivityDetailedHeader from "./ActivityDetailedHeader";
import ActivityDetailsInfo from "./ActivityDetailsInfo";
import ActivityDetailedChat from "./ActivityDetailedChat";
import ActivityDetailedSidebar from "./ActivityDetailedSidebar";

export default observer(function ActivityDetails() {
    const { activityStore } = useStore();
    const { selectedActivity: activity,
        loadActivity, loadingInitial } = activityStore;
    const { id } = useParams();
    
    useEffect(() => {
        if (id) loadActivity(id);
    }, [id, loadActivity]);
    
    if (loadingInitial || !activity) return <LoadingComponent />;

    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityDetailedHeader />
                <ActivityDetailsInfo />
                <ActivityDetailedChat />
            </Grid.Column>
            <Grid.Column width={6}>
                <ActivityDetailedSidebar />
            </Grid.Column>            
        </Grid>
    )
})