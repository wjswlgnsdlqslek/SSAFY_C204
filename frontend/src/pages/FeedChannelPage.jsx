import FeedHeader from "../components/Channel/feed/FeedHeader";
import ContentItemGrid from "../components/Channel/feed/ContentItemGrid";
import ContentDrawer from "../components/Channel/feed/ContentDrawer";
import { useState } from "react";

function FeedChannelPage() {
  const [selectedContent, setSelectedContent] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleSelectContent = (content) => {
    setSelectedContent(content);
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedContent(null);
  };

  return (
    <div className="flex">
      <div className="flex-1">
        <FeedHeader />
        <ContentItemGrid onSelectContent={handleSelectContent} />
      </div>
      <ContentDrawer
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
        content={selectedContent}
      />
    </div>
  );
}

export default FeedChannelPage;
