#!/bin/bash

# Define an array with the list of JAR files to install
declare -a JAR_FILES=(
  "https://repo1.maven.org/maven2/com/microsoft/sqlserver/mssql-jdbc/6.4.0.jre8/sqljdbc42.jar"
  "https://repo1.maven.org/maven2/com/google/code/gson/gson/2.9.0/gson-2.9.0.jar"
  "https://repo1.maven.org/maven2/com/fasterxml/jackson/core/jackson-databind/2.13.3/jackson-databind-2.13.3.jar"
  "https://repo1.maven.org/maven2/io/jsonwebtoken/jjwt/0.9.0/jjwt-0.9.0.jar"
  "https://repo1.maven.org/maven2/com/fasterxml/jackson/core/jackson-core/2.13.2/jackson-core-2.13.2.jar"
  "https://repo1.maven.org/maven2/org/jboss/weld/servlet/weld-servlet/2.4.8.Final/weld-servlet-2.4.8.Final.jar"
  "https://repo1.maven.org/maven2/com/stripe/stripe-java/20.128.0/stripe-java-20.128.0.jar"
  "https://repo1.maven.org/maven2/com/fasterxml/jackson/core/jackson-databind/2.13.3/jackson-databind-2.13.3.jar"
  "https://repo1.maven.org/maven2/com/fasterxml/jackson/core/jackson-annotations/2.13.2/jackson-annotations-2.13.2.jar"
  "https://jitpack.io/com/github/imagekit-developer/imagekit-java/2.0.0/imagekit-java-2.0.0.jar"
  "https://repo1.maven.org/maven2/com/squareup/okhttp3/okhttp/3.6.0/okhttp-3.6.0.jar"
  "https://repo1.maven.org/maven2/com/squareup/okio/okio/2.9.0/okio-2.9.0.jar"
  "https://repo1.maven.org/maven2/commons-codec/commons-codec/1.15/commons-codec-1.15.jar"
  "https://repo1.maven.org/maven2/javax/servlet/javax.servlet-api/4.0.1/javax.servlet-api-4.0.1.jar"
  "https://repo1.maven.org/maven2/javax/annotation/javax.annotation-api/1.3.2/javax.annotation-api-1.3.2.jar"
)

# Define the directory where the JAR files will be installed
INSTALL_DIR="./lib"

# Create the directory if it doesn't exist
mkdir -p "$INSTALL_DIR"

# Download and install each JAR file
for jar in "${JAR_FILES[@]}"; do
  echo "Installing $(basename $jar) ..."
  curl -L -o "$INSTALL_DIR/$(basename $jar)" "$jar"
done

echo "All JAR files installed successfully."

