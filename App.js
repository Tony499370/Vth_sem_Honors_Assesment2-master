import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, FlatList, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

const categories = [
  { id: '1', title: 'FOOTWEAR', icon: '👟' },
  { id: '2', title: 'BAGS', icon: '👜' },
  { id: '3', title: 'APPAREL', icon: '👕' },
];

const products = [
  { id: '1', title: 'AIR LEGGING SPORT', category: 'Apparel', price: 'Rp200.000', image: 'https://thumbs.dreamstime.com/b/modern-abstract-sports-jersey-design-black-white-orange-color-scheme-features-unique-edgy-pattern-327161389.jpg' },
  { id: '2', title: 'AERO SPORT INFINITY MAX', category: 'Footwear', price: 'Rp450.000', image: 'https://images.meesho.com/images/products/175028108/hwdey_512.webp' },
  { id: '3', title: 'PUMA RUNNER BLACK', category: 'Footwear', price: 'Rp250.000', image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/p/j/r/6-wf-834-a-6-zixer-red-original-imaghmp5pppg6hqe.jpeg?q=90&crop=false' },
  { id: '4', title: 'SPORT+ BAG', category: 'Bags', price: 'Rp300.000', image: 'https://www.mumkins.in/cdn/shop/products/t-shirts-for-kids-bu02mk22-navyblue-5.jpg?v=1649845965&width=1080' },
];

export default function ShoppingPage() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>Sport Shoes</Text>
          <View style={styles.headerIcons}>
            <TouchableOpacity><Text>🛒</Text></TouchableOpacity>
            <TouchableOpacity><Text>🔔</Text></TouchableOpacity>
            <TouchableOpacity><Text>❤️</Text></TouchableOpacity>
          </View>
        </View>

        {/* Search Bar */}
        <View style={styles.searchBar}>
          <TextInput placeholder="Search items" style={styles.searchInput} />
          <TouchableOpacity style={styles.searchButton}>
            <Text>🔍</Text>
          </TouchableOpacity>
        </View>

        {/* Balance Info */}
        <View style={styles.balanceContainer}>
          <View style={styles.balanceInfo}>
            <Text>Wallet Balance</Text>
            <Text style={styles.balanceAmount}>Rp1.000.000</Text>
          </View>
          <TouchableOpacity style={styles.topUpButton}>
            <Text>Top Up</Text>
          </TouchableOpacity>
        </View>

        {/* Offer Banner */}
        <View style={styles.offerBanner}>
          <Image
            source={{ uri: 'https://img.freepik.com/free-vector/flat-15-percent-discount-sale-banner-template_23-2149364601.jpg' }}
            style={styles.bannerImage}
          />
        </View>

        {/* Categories */}
        <Text style={styles.sectionTitle}>SHOP BY CATEGORY</Text>
        <View style={styles.categoryList}>
          {categories.map((category) => (
            <View key={category.id} style={styles.categoryCard}>
              <Text style={styles.categoryIcon}>{category.icon}</Text>
              <Text>{category.title}</Text>
            </View>
          ))}
        </View>

        {/* For You (Products) */}
        <Text style={styles.sectionTitle}>FOR YOU</Text>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={styles.productCard}>
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <Text style={styles.productTitle}>{item.title}</Text>
              <Text style={styles.productCategory}>{item.category}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
            </View>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  logo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ff6347',
  },
  headerIcons: {
    flexDirection: 'row',
    width: 80,
    justifyContent: 'space-between',
  },
  searchBar: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginRight: 10,
  },
  searchButton: {
    backgroundColor: '#ff6347',
    padding: 10,
    borderRadius: 8,
  },
  balanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  balanceInfo: {
    justifyContent: 'center',
  },
  balanceAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff6347',
  },
  topUpButton: {
    backgroundColor: '#ff6347',
    padding: 10,
    borderRadius: 8,
    justifyContent: 'center',
  },
  offerBanner: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  categoryList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  categoryCard: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryIcon: {
    fontSize: 30,
  },
  productCard: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  productImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  productCategory: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 14,
    color: '#ff6347',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
