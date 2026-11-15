/**
 * @sudobility/raidr_ui — shared presentational UI for the raidr catalog console.
 *
 * These components are typed on `@sudobility/raidr_types` and use
 * `@sudobility/raidr_lib` pure helpers, but they are navigation-agnostic: they
 * never build a URL, import a router, or own a Navigator context. Anything that
 * opens a destination or starts a flow is injected by the host app as a
 * callback (`onOpen*`, `onSignIn`) or a value (`extensionUrl`). Consumed by
 * both `raidr_app` (react-router) and `raidr_mcp_app` (Navigator).
 */

// API surface — browse / schema / playground / flow
export { SchemaTree } from './components/api/SchemaTree';
export { ResponseView } from './components/api/ResponseView';
export { MethodBadge } from './components/api/MethodBadge';
export { AuthBadge } from './components/api/AuthBadge';
export { ParamField } from './components/api/ParamField';
export { TokenGuide } from './components/api/TokenGuide';
export { CredentialPanel, type CredentialPanelProps } from './components/api/CredentialPanel';
export { FlowMap, type FlowMapProps } from './components/api/FlowMap';
export { FlowGroupNode, type FlowGroupData } from './components/api/FlowGroupNode';

// MCP surface — tools table + connect instructions
export { ToolsTable } from './components/ToolsTable';
export { ConnectDocs, type ConnectDocsProps } from './components/ConnectDocs';

// Generic primitives
export { CopyBlock } from './components/CopyBlock';
export { Markdown } from './components/Markdown';
export { Loading, EmptyState, ErrorState } from './components/PageState';
export { SearchBar, Pagination } from './components/SearchPagination';
export { SignInPrompt, type SignInPromptProps } from './components/SignInPrompt';
export { Section } from './components/layout/Section';
