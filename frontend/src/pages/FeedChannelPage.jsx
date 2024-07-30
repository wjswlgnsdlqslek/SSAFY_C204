import FeedHeader from "../components/Channel/feed/FeedHeader";
import ContentItemGrid from "../components/Channel/feed/ContentItemGrid";
import ContentDrawer from "../components/Channel/feed/ContentDrawer";
import { useState } from "react";

function FeedChannelPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);

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
        <FeedHeader />
        <ContentItemGrid onSelectContent={handleSelectContent} />
        <ContentDrawer
          isOpen={isDrawerOpen}
          onClose={handleCloseDrawer}
          content={selectedContent}
        />
      </div>
    </div>
  );
}

export default FeedChannelPage;
