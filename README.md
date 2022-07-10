<!-- ![set up](./server/readMeImages/route-with-param-individ-user.png?raw=true) -->

# Set up concurrently

[overview](https://docs.aws.amazon.com/documentdb/latest/developerguide/how-it-works.html#how-it-works.endpoints)

> Endpoint:An endpoint is a host address and a port number, separated by a colon.

> We recommend that you connect to your cluster using the cluster endpoint and in replica set mode (see Connecting to Amazon DocumentDB as a Replica Set) unless you have a specific use case for connecting to the reader endpoint or an instance endpoint. To route requests to your replicas, choose a driver read preference setting that maximizes read scaling while meeting your application's read consistency requirements. The secondaryPreferred read preference enables replica reads and frees up the primary instance to do more work.

# Why do they reommend replica sets?

[Reason for using replica set](https://docs.aws.amazon.com/documentdb/latest/developerguide/connect-to-replica-set.html)
The advantage of connecting as a replica set is that it enables your SDK to discover the cluster topography automatically, including when instances are added or removed from the cluster. You can then use your cluster more efficiently by routing read requests to your replica instances.

When you connect as a replica set, you can specify the readPreference for the connection. If you specify a read preference of secondaryPreferred, the client routes read queries to your replicas and write queries to your primary instance (as in the following diagram). This is a better use of your cluster resources. For more information, see Read Preference Options.

# Cluster Endpoints

[See Cluster Endpoints](https://docs.aws.amazon.com/documentdb/latest/developerguide/how-it-works.html#how-it-works.endpoints)

> The cluster endpoint connects to your cluster’s current primary instance. The cluster endpoint can be used for read and write operations. An Amazon DocumentDB cluster has exactly one cluster endpoint.

> The cluster endpoint provides failover support for read and write connections to the cluster. If your cluster’s current primary instance fails, and your cluster has at least one active read replica, the cluster endpoint automatically redirects connection requests to a new primary instance. When connecting to your Amazon DocumentDB cluster, we recommend that you connect to your cluster using the cluster endpoint and in replica set mode (see Connecting to Amazon DocumentDB as a Replica Set).

The following is an example Amazon DocumentDB cluster endpoint:

        sample-cluster.cluster-123456789012.us-east-1.docdb.amazonaws.com:27017

The following is an example connection string using this cluster endpoint:

        mongodb://username:password@sample-cluster.cluster-123456789012.us-east-1.docdb.amazonaws.com:27017

For information about finding a cluster's endpoints, see [Finding a Cluster's Endpoints](https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-endpoints-find.html).

# Reader Enpoints

> The reader endpoint load balances read-only connections across all available replicas in your cluster. Attempting to perform a write operation over a connection to the reader endpoint results in an error. An Amazon DocumentDB cluster has exactly one reader endpoint.

> If the cluster contains only one (primary) instance, the reader endpoint connects to the primary instance. When you add a replica instance to your Amazon DocumentDB cluster, the reader endpoint opens read-only connections to the new replica after it is active.

The following is an example reader endpoint for an Amazon DocumentDB cluster:

        sample-cluster.cluster-ro-123456789012.us-east-1.docdb.amazonaws.com:27017

The following is an example connection string using a reader endpoint:

        mongodb://username:password@sample-cluster.cluster-ro-123456789012.us-east-1.docdb.amazonaws.com:27017

> The reader endpoint load balances read-only connections, not read requests. If some reader endpoint connections are more heavily used than others, your read requests might not be equally balanced among instances in the cluster. It is recommended to distribute requests by connecting to the cluster endpoint as a replica set and utilizing the secondaryPreferred read preference option.

For information about finding a cluster's endpoints, see [Finding a Cluster's Endpoints](https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-endpoints-find.html).

If you clicked on [Finding a Cluster's Endpoints](https://docs.aws.amazon.com/documentdb/latest/developerguide/db-cluster-endpoints-find.html) it will bring up the section bellow:

## Using the Console

To find a cluster's endpoints using the console

- 1.)Sign in to the AWS Management Console, and open the Amazon DocumentDB console at https://console.aws.amazon.com/docdb.

- 2.)In the navigation pane, choose clusters.

- 3.)From the list of clusters, choose the name of the cluster you are interested in.

- 4.)Scroll down to the Details section and locate the cluster endpoint and the reader endpoint.
  ![set up](./server/readMeImages/db-cluster-endpoints.png?raw=true)

- 5.)To connect to this cluster, scroll up to the Connect section. Locate the connection string for the mongo shell and a connection string that can be used in the application code to connect to your cluster.
  ![set up](./server/readMeImages/cluster-connection-strings.png?raw=true)
