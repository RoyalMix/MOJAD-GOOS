import app from "../core/bootstrap/server";

import authRoutes from "./v1/auth";
import jobRoutes from "./v1/jobs";
import walletRoutes from "./v1/wallet";
import opportunityRoutes from "./v1/opportunities";

// API versioning
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/jobs", jobRoutes);
app.use("/api/v1/wallet", walletRoutes);
app.use("/api/v1/opportunities", opportunityRoutes);

export default app;
