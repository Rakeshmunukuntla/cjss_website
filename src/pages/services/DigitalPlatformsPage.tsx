import React from "react";

export const DigitalPlatformsPage: React.FC = () => {
  return (
    <main className="w-full min-h-screen text-white bg-[#020617]">
      {/* =====================================================
          HERO SECTION (same banner style)
      ===================================================== */}
      <section className="relative w-full min-h-[80vh]">
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/hybrisBanner.jpg"
            className="w-full   object-cover h-full"
            alt="Digital Platforms Banner"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28 flex flex-col justify-center min-h-[80vh]">
          <span className="text-xs tracking-widest text-cyan-300">
            Digital Platforms
          </span>

          <h1 className="mt-3 text-5xl font-semibold leading-tight">
            BUILD{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-300">
              COMPOSABLE COMMERCE
            </span>{" "}
            ON SAP HYBRIS / SAP COMMERCE CLOUD
          </h1>

          <p className="mt-4 max-w-3xl text-slate-200/90">
            We design, implement and evolve digital commerce platforms on SAP
            Hybris / SAP Commerce Cloud—integrated with your ecosystem and ready
            for global scale.
          </p>
        </div>
      </section>

      {/* =====================================================
          SOLUTIONS WE OFFER
      ===================================================== */}
      <section
        id="solutions-section"
        className="w-full py-20 bg-[#0d1320] border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28">
          <h2 className="text-4xl font-light">
            <span className="font-semibold">Solutions</span> we Offer
          </h2>

          <p className="mt-5 max-w-4xl text-slate-300 text-lg">
            Our digital platforms team brings together SAP Hybris architects,
            backend and frontend engineers to build resilient, scalable and
            flexible commerce platforms for B2C, B2B and marketplaces.
          </p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold">
                SAP Hybris / SAP Commerce Cloud Implementation
              </h3>
              <p className="mt-3 text-slate-300">
                Greenfield implementations, upgrades and re-platforming of your
                commerce stack.
              </p>
              <a
                href="#section-sap-commerce"
                className="mt-3 inline-block text-blue-400"
              >
                Read More →
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Headless &amp; Composable Commerce Architecture
              </h3>
              <p className="mt-3 text-slate-300">
                Decouple frontends, experience layers and services for agility.
              </p>
              <a
                href="#section-headless-composable"
                className="mt-3 inline-block text-blue-400"
              >
                Read More →
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Product Information &amp; Catalog Management
              </h3>
              <p className="mt-3 text-slate-300">
                Clean, structured product data and catalogs that scale across
                channels and regions.
              </p>
              <a
                href="#section-pim-catalog"
                className="mt-3 inline-block text-blue-400"
              >
                Read More →
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Order Management &amp; Fulfillment (OMS)
              </h3>
              <p className="mt-3 text-slate-300">
                Unified order orchestration across warehouses, stores and
                partners.
              </p>
              <a
                href="#section-oms-fulfillment"
                className="mt-3 inline-block text-blue-400"
              >
                Read More →
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Pricing, Promotions &amp; Personalization
              </h3>
              <p className="mt-3 text-slate-300">
                Advanced rules for pricing, offers and experiences driven by
                data.
              </p>
              <a
                href="#section-pricing-promotions"
                className="mt-3 inline-block text-blue-400"
              >
                Read More →
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Integrations &amp; Microservices for Commerce
              </h3>
              <p className="mt-3 text-slate-300">
                Connect SAP Hybris to ERPs, CRMs, payment gateways, logistics
                and custom services.
              </p>
              <a
                href="#section-integrations-microservices"
                className="mt-3 inline-block text-blue-400"
              >
                Read More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 1 — SAP HYBRIS / SAP COMMERCE CLOUD
      ===================================================== */}
      <section
        id="section-sap-commerce"
        className="w-full py-24 bg-gradient-to-b from-[#050816] to-[#0b1120]"
      >
        <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28">
          <h2 className="text-5xl font-light">
            <span className="font-semibold">SAP</span> Hybris / SAP Commerce
            Cloud
          </h2>

          <h3 className="mt-10 text-2xl font-semibold">
            Implementation &amp; Evolution
          </h3>

          <p className="mt-4 text-lg max-w-5xl text-slate-300 leading-relaxed">
            We help you design, implement and evolve SAP Hybris / SAP Commerce
            Cloud platforms that support multi-site, multi-language and
            multi-region commerce—while staying aligned with SAP&apos;s roadmap
            and best practices.
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-14">
            <div>
              <h4 className="text-xl font-semibold">Greenfield Builds</h4>
              <p className="mt-3 text-slate-300">
                End-to-end projects from discovery to go-live, including
                architecture, integrations and rollout.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">
                Upgrades &amp; Migrations
              </h4>
              <p className="mt-3 text-slate-300">
                Move from older Hybris versions or legacy platforms with minimal
                downtime.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">
                B2C, B2B &amp; Marketplaces
              </h4>
              <p className="mt-3 text-slate-300">
                Use Hybris accelerators and extensions tailored for your
                business model.
              </p>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <div>
              <h4 className="text-2xl font-semibold">
                Platform Built for Growth
              </h4>
              <p className="mt-4 text-lg text-slate-300">
                We structure your commerce implementation so that adding new
                brands, stores, regions or catalogs becomes configuration-led,
                not a multi-month project.
              </p>
            </div>

            <img
              src="/images/hybris1.png"
              className="w-full rounded-xl shadow-xl"
              alt="SAP Hybris platform"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 2 — HEADLESS & COMPOSABLE
      ===================================================== */}
      <section
        id="section-headless-composable"
        className="w-full py-24 bg-[#020617]"
      >
        <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28">
          <h2 className="text-5xl font-light">
            <span className="font-semibold">Headless</span> &amp; Composable
            Commerce
          </h2>

          <h3 className="mt-10 text-2xl font-semibold">
            Decoupled, Future-Ready Platforms
          </h3>

          <p className="mt-4 text-lg max-w-5xl text-slate-300 leading-relaxed">
            Use SAP Commerce as the transactional core while exposing APIs and
            events to headless storefronts, mobile apps, kiosks and partner
            channels, enabling faster change and experimentation.
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-14">
            <div>
              <h4 className="text-xl font-semibold">API-First Architecture</h4>
              <p className="mt-3 text-slate-300">
                Expose Hybris capabilities via APIs and events for external
                channels and services.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">Experience Layers</h4>
              <p className="mt-3 text-slate-300">
                Use React/Next.js, SPA, PWA or 3rd-party experience platforms as
                your storefront layer.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">Composable Services</h4>
              <p className="mt-3 text-slate-300">
                Combine SAP Commerce with search, CMS, DAM, CDP and payment
                services in a composable stack.
              </p>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <img
              src="/images/hybris2.png"
              className="w-full rounded-xl shadow-xl"
              alt="Headless and composable commerce"
            />

            <div>
              <h4 className="text-2xl font-semibold">
                Faster Frontend Innovation
              </h4>
              <p className="mt-4 text-lg text-slate-300">
                Decoupling the frontend from the commerce core lets your teams
                iterate on UX, personalization and campaigns without touching
                backend order flows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 3 — PRODUCT & CATALOG MANAGEMENT
      ===================================================== */}
      <section
        id="section-pim-catalog"
        className="w-full py-24 bg-gradient-to-b from-[#050816] to-[#0b1120]"
      >
        <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28">
          <h2 className="text-5xl font-light">
            <span className="font-semibold">Product</span> &amp; Catalog
            Management
          </h2>

          <h3 className="mt-10 text-2xl font-semibold">
            Clean, Structured Commerce Data
          </h3>

          <p className="mt-4 text-lg max-w-5xl text-slate-300 leading-relaxed">
            We help you design product, category and catalog structures that
            work for buyers, merchandisers and search systems—across multiple
            regions, languages and channels.
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-14">
            <div>
              <h4 className="text-xl font-semibold">Catalog Strategy</h4>
              <p className="mt-3 text-slate-300">
                Multi-catalog, multi-brand and multi-region design using Hybris
                catalog features.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">Product Structures</h4>
              <p className="mt-3 text-slate-300">
                Variants, bundles, configurable products and rich attributes.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">
                Data Quality &amp; Governance
              </h4>
              <p className="mt-3 text-slate-300">
                Rules, workflows and tools to maintain clean, consistent product
                data over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 4 — OMS & FULFILLMENT
      ===================================================== */}
      <section
        id="section-oms-fulfillment"
        className="w-full py-24 bg-[#020617]"
      >
        <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28">
          <h2 className="text-5xl font-light">
            <span className="font-semibold">Order</span> Management &amp;
            Fulfillment
          </h2>

          <h3 className="mt-10 text-2xl font-semibold">
            Reliable, Predictable Delivery
          </h3>

          <p className="mt-4 text-lg max-w-5xl text-slate-300 leading-relaxed">
            We implement order management and orchestration processes that give
            clear visibility from cart to delivery—across warehouses, carriers,
            partners and channels.
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-14">
            <div>
              <h4 className="text-xl font-semibold">Unified Order Flows</h4>
              <p className="mt-3 text-slate-300">
                Standardized flows for order capture, payment, allocation,
                shipment and returns.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">
                Inventory &amp; Availability
              </h4>
              <p className="mt-3 text-slate-300">
                Stock visibility across locations, safety stock rules and ATP
                views.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">
                Carrier &amp; 3PL Integrations
              </h4>
              <p className="mt-3 text-slate-300">
                Integrations with logistics providers, WMS/OMS and last-mile
                platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 5 — PRICING, PROMOTIONS & PERSONALIZATION
      ===================================================== */}
      <section
        id="section-pricing-promotions"
        className="w-full py-24 bg-gradient-to-b from-[#050816] to-[#0b1120]"
      >
        <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28">
          <h2 className="text-5xl font-light">
            <span className="font-semibold">Pricing,</span> Promotions &amp;
            Personalization
          </h2>

          <h3 className="mt-10 text-2xl font-semibold">
            Commercial Agility, at Scale
          </h3>

          <p className="mt-4 text-lg max-w-5xl text-slate-300 leading-relaxed">
            Use SAP Commerce&apos;s pricing, promotions and targeting
            capabilities to run campaigns, discounts and personalized
            experiences safely, without breaking your margins.
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-14">
            <div>
              <h4 className="text-xl font-semibold">Advanced Pricing Models</h4>
              <p className="mt-3 text-slate-300">
                B2B price lists, customer-specific pricing, tiered models and
                contract pricing.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">
                Promotions &amp; Campaigns
              </h4>
              <p className="mt-3 text-slate-300">
                Cart, catalog and voucher-based promos with guardrails and
                testing.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">
                Personalized Experiences
              </h4>
              <p className="mt-3 text-slate-300">
                Segment-based rules, recommendations and targeted content
                powered by data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 6 — INTEGRATIONS & MICROSERVICES
      ===================================================== */}
      <section
        id="section-integrations-microservices"
        className="w-full py-24 bg-[#020617]"
      >
        <div className="max-w-7xl mx-auto px-10 md:px-16 lg:px-28">
          <h2 className="text-5xl font-light">
            <span className="font-semibold">Integrations</span> &amp;
            Microservices
          </h2>

          <h3 className="mt-10 text-2xl font-semibold">
            Connect Commerce with Your Ecosystem
          </h3>

          <p className="mt-4 text-lg max-w-5xl text-slate-300 leading-relaxed">
            We design integration patterns and microservices around SAP Commerce
            that connect ERPs, CRMs, payment gateways, search, marketing
            platforms and custom systems.
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-14">
            <div>
              <h4 className="text-xl font-semibold">ERP, CRM, Payments</h4>
              <p className="mt-3 text-slate-300">
                SAP, Salesforce, payment providers and tax engines integrated
                cleanly with commerce.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">Microservices Layer</h4>
              <p className="mt-3 text-slate-300">
                Node.js/Java services that extend core commerce capabilities
                without heavy customization.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">Event-Driven Patterns</h4>
              <p className="mt-3 text-slate-300">
                Use events and messaging to sync orders, inventory, customer
                data and analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TALK WITH US (your existing layout, adapted)
      ===================================================== */}
      {/* =====================================================
    TALK WITH US — NEHA
===================================================== */}
      <section className="w-full flex justify-center mt-20 mb-20 px-4">
        <div
          className="
      w-full max-w-5xl
      rounded-3xl
      bg-slate-900/70
      backdrop-blur-2xl
      border border-white/10
      shadow-[0_0_60px_rgba(34,211,238,0.20)]
      p-6 sm:p-10 md:p-14
    "
        >
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center md:items-start">
            {/* LEFT TEXT BLOCK */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-300 via-sky-300 to-purple-300 bg-clip-text text-transparent">
                Talk with us
              </h2>

              <p className="mt-4 text-base text-slate-300/90 leading-relaxed max-w-md">
                Interested in quality engineering services? Reach out and we'll
                connect you with the right specialist who fits your project
                needs.
              </p>

              <div className="mt-6 h-[3px] w-24 sm:w-28 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-70" />
            </div>

            {/* RIGHT CONTACT CARD */}
            <div
              className="
          rounded-3xl
          bg-slate-950/80
          border border-white/10
          shadow-[0_0_40px_rgba(0,0,0,0.55)]
          p-6 sm:p-8
          flex gap-4 sm:gap-5
          items-start
          hover:shadow-[0_0_60px_rgba(34,211,238,0.35)]
          transition-all
        "
            >
              {/* PROFILE IMAGE */}
              <img
                src="/images/priya.png"
                alt="Priya"
                className="
            h-16 w-16 sm:h-20 sm:w-20
            rounded-full
            object-cover
            border border-purple-500/40
            shadow-[0_0_20px_rgba(168,85,247,0.35)]
          "
              />

              {/* DETAILS */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  Priya
                </h3>
                <p className="text-sm text-slate-400">Head of QA Solutions</p>

                <p className="mt-3 sm:mt-4 text-sm">
                  Email:{" "}
                  <a
                    href="mailto:qa@cjss.example"
                    className="text-cyan-400 hover:underline"
                  >
                    qa@cjss.example
                  </a>
                </p>

                <p className="text-xs text-slate-500 mt-1">
                  We typically respond within 1 business day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DigitalPlatformsPage;
