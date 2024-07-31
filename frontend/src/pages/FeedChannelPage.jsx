import FeedHeader from "../components/Channel/feed/FeedHeader";
import ContentItemGrid from "../components/Channel/feed/ContentItemGrid";
import ContentDrawer from "../components/Channel/feed/ContentDrawer";
import { useState } from "react";
import CreateContentDrawer from "../components/Channel/feed/CreateContentDrawer";

function FeedChannelPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);
  const [isCreateDrawerOpen, setIsCreateDrawerOpen] = useState(false);

  const handleSelectContent = (content) => {
    setSelectedContent(content);
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedContent(null);
  };
  return (
    <div className="flex h-full">
      <div className="flex flex-col flex-1">
        <FeedHeader openCreateDrawer={() => setIsCreateDrawerOpen(true)} />
        <ContentItemGrid onSelectContent={handleSelectContent} />
        <ContentDrawer
          isOpen={isDrawerOpen}
          onClose={handleCloseDrawer}
          content={selectedContent}
        />
        <CreateContentDrawer
          onClose={() => setIsCreateDrawerOpen(false)}
          isOpen={isCreateDrawerOpen}
        />
      </div>
    </div>
  );
}

export default FeedChannelPage;
