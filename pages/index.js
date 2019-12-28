import React from 'react'
import SearchBar from "../components/SearchBar"
import List from "../components/List"
import socialLinks from '../links/social'
import devOpsLinks from '../links/dev-ops'
import documentationLinks from '../links/documentation'
import mediaLinks from '../links/media'

const Home = () => (
  <div>
    <h1>Hi, Dillon</h1>
    <SearchBar />
    <List title="Communication / Social" items={socialLinks} />
    <List title="Media" items={mediaLinks} />
    <List title="Dev-Ops" items={devOpsLinks} />
    <List title="Documentation" items={documentationLinks} />
  </div>
)

export default Home
